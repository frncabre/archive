import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import { FullBlog } from "./interface";

export const client = createClient({
    apiVersion: "2023-05-03",
    dataset: "production",
    projectId: "vbo8xo4i",
    useCdn: false
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source)
}

export async function getAllData(){
    const query = `
    *[_type == 'notes'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export async function getArticle(slug: string) {
    const query = `
        *[_type == 'blog' && slug.current == $slug][0]{
            title,
            smallDescription,
            "currentSlug": slug.current,
            titleImage,
            content
        }
    `;
    return client.fetch<FullBlog | null>(query, { slug });
}

