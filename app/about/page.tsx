import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Navbar from "../components/Navbar";
import { getSiteSettings, type Locale } from "../lib/sanity";

const lang: Locale = "en";

export default async function AboutPage() {
  const settings = await getSiteSettings(lang);

  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-2xl mx-auto px-4 pt-14 pb-24">

        <div className="mb-14">
          <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/40 mb-3">
            About
          </p>
          <h1 className="font-serif text-3xl text-black leading-snug max-w-lg">
            {settings?.tagline}
          </h1>
        </div>

        <div className="space-y-6 font-serif text-[1.05rem] text-black/80 leading-[1.75] max-w-prose">
          {settings?.intro && <p>{settings.intro}</p>}

          {settings?.description && <PortableText value={settings.description} />}

          {settings?.currentSeries && (
            <p>
              The current series,{" "}
              <Link
                href={`/series/${settings.currentSeries.slug}`}
                className="underline underline-offset-3 decoration-black/20 hover:text-[#d4510a] hover:decoration-[#d4510a]/30 transition-colors"
              >
                {settings.currentSeries.title}
              </Link>
              , looks at how cultural practices gain or lose visibility — and what
              that says about institutions, publics and the politics of attention.
            </p>
          )}
        </div>

        <div className="border-t border-black/10 mt-14 pt-12">

          <div className="grid grid-cols-2 gap-8 mb-14">
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-2">
                Founded
              </p>
              <p className="font-serif text-base text-black/70">{settings?.founded}</p>
            </div>
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-2">
                Language
              </p>
              <p className="font-serif text-base text-black/70">{settings?.language}</p>
            </div>
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-2">
                Format
              </p>
              <p className="font-serif text-base text-black/70">{settings?.format}</p>
            </div>
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-2">
                Founder
              </p>
              <p className="font-serif text-base text-black/70">{settings?.founderName}</p>
            </div>
          </div>

          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-4">
              Contact & collaborations
            </p>
            <p className="font-sans text-sm text-black/55 leading-relaxed max-w-sm mb-5">
              ARCHIVE is open to conversations with cultural projects,
              institutions and individuals who share its sensibility.
            </p>
            {settings?.contactEmail && (
              <a
                href={`mailto:${settings.contactEmail}`}
                className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-[#d4510a] hover:text-black transition-colors duration-200"
              >
                {settings.contactEmail} →
              </a>
            )}
          </div>

        </div>

      </main>
    </>
  );
}