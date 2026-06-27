import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type {
  FullNote,
  SimpleNoteCard,
  SeriesListItem,
  SiteSettingsData,
} from "./interface";

export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "vbo8xo4i",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export type Locale = "es" | "en" | "de";
export const DEFAULT_LOCALE: Locale = "en";

// --- Notes ---------------------------------------------------------------

export async function getAllNotes(lang: Locale = DEFAULT_LOCALE) {
  const query = `
    *[_type == "note"] | order(publishedAt desc) {
      "title": coalesce(title[$lang], title.en),
      "excerpt": coalesce(excerpt[$lang], excerpt.en),
      "currentSlug": slug.current,
      titleImage,
      noteType,
      publishedAt,
      "series": series->{
        "title": coalesce(title[$lang], title.en),
        "slug": slug.current
      }
    }
  `;
  return client.fetch<SimpleNoteCard[]>(query, { lang });
}

export async function getNoteBySlug(slug: string, lang: Locale = DEFAULT_LOCALE) {
  const query = `
    *[_type == "note" && slug.current == $slug][0]{
      "title": coalesce(title[$lang], title.en),
      "excerpt": coalesce(excerpt[$lang], excerpt.en),
      "currentSlug": slug.current,
      titleImage,
      noteType,
      publishedAt,
      "content": coalesce(content[$lang], content.en),
      "series": series->{
        "title": coalesce(title[$lang], title.en),
        "slug": slug.current
      }
    }
  `;
  return client.fetch<FullNote | null>(query, { slug, lang });
}

// --- Series ----------------------------------------------------------------

export async function getAllSeries(lang: Locale = DEFAULT_LOCALE) {
  const query = `
    *[_type == "series"] | order(order asc) {
      "title": coalesce(title[$lang], title.en),
      "slug": slug.current,
      number,
      "description": coalesce(description[$lang], description.en),
      status,
      "notesCount": count(*[_type == "note" && references(^._id)])
    }
  `;
  return client.fetch<SeriesListItem[]>(query, { lang });
}

export async function getSeriesBySlug(slug: string, lang: Locale = DEFAULT_LOCALE) {
  const query = `
    *[_type == "series" && slug.current == $slug][0]{
      "title": coalesce(title[$lang], title.en),
      "slug": slug.current,
      number,
      "description": coalesce(description[$lang], description.en),
      status,
      "notes": *[_type == "note" && references(^._id)] | order(publishedAt desc) {
        "title": coalesce(title[$lang], title.en),
        "excerpt": coalesce(excerpt[$lang], excerpt.en),
        "currentSlug": slug.current,
        titleImage,
        noteType,
        publishedAt
      }
    }
  `;
  return client.fetch(query, { slug, lang });
}

// --- Site settings (singleton) ----------------------------------------------

export async function getSiteSettings(lang: Locale = DEFAULT_LOCALE) {
  const query = `
    *[_type == "siteSettings"][0]{
      "tagline": coalesce(tagline[$lang], tagline.en),
      "intro": coalesce(intro[$lang], intro.en),
      "description": coalesce(description[$lang], description.en),
      founded,
      "language": coalesce(language[$lang], language.en),
      "format": coalesce(format[$lang], format.en),
      founderName,
      contactEmail,
      "currentSeries": currentSeries->{
        "title": coalesce(title[$lang], title.en),
        "slug": slug.current
      }
    }
  `;
  return client.fetch<SiteSettingsData | null>(query, { lang });
}