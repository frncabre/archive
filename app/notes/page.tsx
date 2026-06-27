import Link from "next/link";
import Navbar from "../components/Navbar";
import { getAllNotes, type Locale } from "../lib/sanity";

const lang: Locale = "en";

const NOTE_TYPE_LABELS: Record<string, Record<Locale, string>> = {
  essay: { es: "Ensayo", en: "Essay", de: "Essay" },
  observation: { es: "Observación", en: "Observation", de: "Beobachtung" },
  "field-note": { es: "Nota de campo", en: "Field note", de: "Feldnotiz" },
};

function typeLabel(noteType?: string) {
  if (!noteType) return "";
  return NOTE_TYPE_LABELS[noteType]?.[lang] ?? noteType;
}

export default async function NotesPage() {
  const notes = await getAllNotes(lang);

  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-2xl mx-auto px-4 pt-14 pb-24">

        <div className="mb-12">
          <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/40 mb-3">
            Notes
          </p>
          <h1 className="font-serif text-3xl text-black leading-snug">
            Essays, observations & field notes
          </h1>
        </div>

        <ul className="divide-y divide-black/10">
          {notes.map((note) => (
            <li key={note.currentSlug} className="py-8">

              <div className="flex items-center gap-3 mb-3">
                <span className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-black/30">
                  {typeLabel(note.noteType)}
                </span>
                {note.series && (
                  <>
                    <span className="text-black/15">·</span>
                    <Link
                      href={`/series/${note.series.slug}`}
                      className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-[#d4510a]/70 hover:text-[#d4510a] transition-colors"
                    >
                      {note.series.title}
                    </Link>
                  </>
                )}
              </div>

              <Link href={`/notes/${note.currentSlug}`} className="group block">
                <h2 className="font-serif text-xl text-black group-hover:text-[#d4510a] transition-colors duration-200 leading-snug mb-2">
                  {note.title}
                </h2>
                <p className="font-sans text-sm text-black/50 leading-relaxed">
                  {note.excerpt}
                </p>
              </Link>

            </li>
          ))}
        </ul>

      </main>
    </>
  );
}