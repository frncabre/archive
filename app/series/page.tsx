import Link from "next/link";
import Navbar from "../components/Navbar";
import { getAllSeries, type Locale } from "../lib/sanity";

const lang: Locale = "en";

export default async function SeriesPage() {
  const seriesList = await getAllSeries(lang);

  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-2xl mx-auto px-4 pt-14 pb-24">

        <div className="mb-12">
          <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/40 mb-3">
            Series
          </p>
          <h1 className="font-serif text-3xl text-black leading-snug">
            Lines of inquiry
          </h1>
        </div>

        <ul className="divide-y divide-black/10">
          {seriesList.map((series) => (
            <li key={series.slug}>
              <Link
                href={`/series/${series.slug}`}
                className="group flex items-start justify-between gap-8 py-8"
              >
                <div className="flex gap-6 items-start">
                  <span className="font-sans text-[0.65rem] tracking-[0.12em] text-black/30 pt-1 shrink-0">
                    {series.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-serif text-xl text-black group-hover:text-[#d4510a] transition-colors duration-200">
                        {series.title}
                      </h2>
                      {series.status === "active" && (
                        <span className="font-sans text-[0.55rem] tracking-[0.12em] uppercase text-[#d4510a] border border-[#d4510a]/30 px-1.5 py-0.5">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm text-black/55 leading-relaxed max-w-md">
                      {series.description}
                    </p>
                    <p className="font-sans text-[0.65rem] tracking-[0.1em] uppercase text-black/30 mt-3">
                      {series.notesCount} notes
                    </p>
                  </div>
                </div>

                <span className="text-black/20 group-hover:text-[#d4510a] transition-colors duration-200 text-sm shrink-0 pt-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 pt-8 border-t border-black/10">
          <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/25">
            More series forthcoming
          </p>
        </div>

      </main>
    </>
  );
}