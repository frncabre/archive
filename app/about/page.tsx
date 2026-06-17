import Link from "next/link";
import Navbar from "../components/Navbar";

export default function AboutPage() {
    return (
        <>
            <Navbar></Navbar>
            <main className="max-w-2xl mx-auto px-4 pt-14 pb-24">

                {/* Page header */}
                <div className="mb-14">
                    <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/40 mb-3">
                        About
                    </p>
                    <h1 className="font-serif text-3xl text-black leading-snug max-w-lg">
                        An independent curatorial magazine on contemporary culture.
                    </h1>
                </div>

                {/* Main text */}
                <div className="space-y-6 font-serif text-[1.05rem] text-black/80 leading-[1.75] max-w-prose">
                    <p>
                        ARCHIVE is a space for cultural inquiry — a place to ask questions
                        about how art, spaces, projects and practices become visible, valued
                        and circulated in contemporary life.
                    </p>
                    <p>
                        It is not a blog, a travel journal or a lifestyle platform. It is an
                        editorial project: slow, curated and built around a cultural gaze
                        that is both accessible and serious.
                    </p>
                    <p>
                        ARCHIVE is organized around series — sustained lines of inquiry that
                        group essays, observations, interviews and field notes. Each series
                        explores a question from multiple angles, over time.
                    </p>
                    <p>
                        The current series,{" "}
                        <Link
                            href="/series/what-becomes-visible"
                            className="underline underline-offset-3 decoration-black/20 hover:text-[#d4510a] hover:decoration-[#d4510a]/30 transition-colors"
                        >
                            What Becomes Visible?
                        </Link>
                        , looks at how cultural practices gain or lose visibility — and what
                        that says about institutions, publics and the politics of attention.
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-black/10 mt-14 pt-12">

                    {/* Two-col info block */}
                    <div className="grid grid-cols-2 gap-8 mb-14">
                        <div>
                            <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-2">
                                Founded
                            </p>
                            <p className="font-serif text-base text-black/70">2025</p>
                        </div>
                        <div>
                            <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-2">
                                Language
                            </p>
                            <p className="font-serif text-base text-black/70">English</p>
                        </div>
                        <div>
                            <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-2">
                                Format
                            </p>
                            <p className="font-serif text-base text-black/70">
                                Independent digital magazine
                            </p>
                        </div>
                        <div>
                            <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-2">
                                Founder
                            </p>
                            <p className="font-serif text-base text-black/70">Luciana</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-black/35 mb-4">
                            Contact & collaborations
                        </p>
                        <p className="font-sans text-sm text-black/55 leading-relaxed max-w-sm mb-5">
                            ARCHIVE is open to conversations with cultural projects,
                            institutions and individuals who share its sensibility.
                        </p>
                        <a
                            href="mailto:hello@archivemag.com"
                            className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-[#d4510a] hover:text-black transition-colors duration-200"
                        >
                            hello@archivemag.com →
                        </a>
                    </div>

                </div>

            </main>
        </>
    );
}