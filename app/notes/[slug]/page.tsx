import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getNoteBySlug, urlFor } from "@/app/lib/sanity";
import { getLocale } from "@/app/lib/locale";
import { typeLabel } from "@/app/lib/labels";
import Navbar from "@/app/components/Navbar";

const ptComponents: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="font-serif text-2xl text-black mt-10 mb-4">
                {children}
            </h2>
        ),
        normal: ({ children }) => (
            <p className="font-serif text-[1.05rem] text-black/80 leading-[1.75] mb-6">
                {children}
            </p>
        ),
    },
};

export default async function NotePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const lang = await getLocale();
    const data = await getNoteBySlug(slug, lang);

    if (!data) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="max-w-2xl mx-auto px-4 pt-14 pb-24">

                <header className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-black/30">
                            {typeLabel(data.noteType, lang)}
                        </span>
                        {data.series && (
                            <>
                                <span className="text-black/15">·</span>
                                <Link
                                    href={`/series/${data.series.slug}`}
                                    className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-[#d4510a]/70 hover:text-[#d4510a] transition-colors"
                                >
                                    {data.series.title}
                                </Link>
                            </>
                        )}
                    </div>

                    <h1 className="font-serif text-3xl text-black leading-snug mb-4">
                        {data.title}
                    </h1>
                    <p className="font-sans text-sm text-black/55 leading-relaxed">
                        {data.excerpt}
                    </p>
                </header>

                {data.titleImage && (
                    <div className="relative w-full h-[360px] mb-10 overflow-hidden rounded-lg">
                        <Image
                            src={urlFor(data.titleImage).url()}
                            alt={data.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                )}

                <article>
                    <PortableText value={data.content} components={ptComponents} />
                </article>

            </main>
        </>
    );
}