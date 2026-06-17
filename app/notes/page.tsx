import Link from "next/link";
import Navbar from "../components/Navbar";

const NOTES = [
    {
        slug: "what-makes-something-culturally-visible",
        title: "What makes something culturally visible?",
        type: "Essay",
        series: { label: "What Becomes Visible?", slug: "what-becomes-visible" },
        date: "2025",
        excerpt:
            "On visibility, circulation and the value we assign to cultural objects — and why some things rise while others disappear.",
    },
    {
        slug: "visibility-is-not-only-social-media",
        title: "Visibility is not only social media",
        type: "Observation",
        series: { label: "What Becomes Visible?", slug: "what-becomes-visible" },
        date: "2025",
        excerpt:
            "Cultural communication existed long before platforms. What we lose when we confuse reach with presence.",
    },
    {
        slug: "why-does-art-feel-distant-sometimes",
        title: "Why does art feel distant sometimes?",
        type: "Essay",
        series: { label: "What Becomes Visible?", slug: "what-becomes-visible" },
        date: "2025",
        excerpt:
            "Access, publics and the symbolic barriers that turn culture into something that feels meant for someone else.",
    },
    {
        slug: "spaces-that-make-culture",
        title: "Spaces that make culture",
        type: "Field note",
        series: { label: "What Becomes Visible?", slug: "what-becomes-visible" },
        date: "2025",
        excerpt:
            "A look at how physical and institutional spaces shape what gets made, shown and remembered.",
    },
    {
        slug: "who-gets-programmed",
        title: "Who gets programmed?",
        type: "Essay",
        series: { label: "What Becomes Visible?", slug: "what-becomes-visible" },
        date: "2025",
        excerpt:
            "On legitimation, selection and the invisible logic behind institutional programming decisions.",
    },
];

export default function NotesPage() {
    return (
        <>
            <Navbar></Navbar>
            <main className="max-w-2xl mx-auto px-4 pt-14 pb-24">

                {/* Page header */}
                <div className="mb-12">
                    <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/40 mb-3">
                        Notes
                    </p>
                    <h1 className="font-serif text-3xl text-black leading-snug">
                        Essays, observations & field notes
                    </h1>
                </div>

                {/* Notes list */}
                <ul className="divide-y divide-black/10">
                    {NOTES.map((note) => (
                        <li key={note.slug} className="py-8">

                            {/* Meta row — standalone, outside the title link */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-black/30">
                                    {note.type}
                                </span>
                                <span className="text-black/15">·</span>
                                <Link
                                    href={`/series/${note.series.slug}`}
                                    className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-[#d4510a]/70 hover:text-[#d4510a] transition-colors"
                                >
                                    {note.series.label}
                                </Link>
                            </div>

                            {/* Title link */}
                            <Link href={`/notes/${note.slug}`} className="group block">
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