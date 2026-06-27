import { notFound } from "next/navigation";
import Link from "next/link";
import { getSeriesBySlug } from "@/app/lib/sanity";
import { getLocale } from "@/app/lib/locale";
import { typeLabel } from "@/app/lib/labels";
import Navbar from "@/app/components/Navbar";

export default async function SeriesDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const lang = await getLocale();
    const series = await getSeriesBySlug(slug, lang);

    if (!series) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="max-w-2xl mx-auto px-4 pt-14 pb-24">

                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="font-sans text-[0.65rem] tracking-[0.12em] text-black/30">
                            № {series.number}
                        </span>
                        {series.status === "active" && (
                            <span className="font-sans text-[0.55rem] tracking-[0.12em] uppercase text-[#d4510a] border border-[#d4510a]/30 px-1.5 py-0.5">
                                Active
                            </span>
                        )}
                    </div>
                    <h1 className="font-serif text-3xl text-black leading-snug mb-4">
                        {series.title}
                    </h1>
                    <p className="font-sans text-sm text-black/55 leading-relaxed max-w-md">
                        {series.description}
                    </p>
                </div>

                <div className="border-t border-black/10 pt-10">
                    <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/40 mb-6">
                        {series.notes.length} notes
                    </p>

                    <ul className="divide-y divide-black/10">
                        {series.notes.map((note: any) => (
                            <li key={note.currentSlug} className="py-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-black/30">
                                        {typeLabel(note.noteType, lang)}
                                    </span>
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

                    {series.notes.length === 0 && (
                        <p className="font-sans text-sm text-black/40">
                            No notes published yet in this series.
                        </p>
                    )}
                </div>

                <div className="mt-14 pt-8 border-t border-black/10">
                    <Link
                        href="/series"
                        className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/40 hover:text-[#d4510a] transition-colors"
                    >
                        ← All series
                    </Link>
                </div>

            </main>
        </>
    );
}