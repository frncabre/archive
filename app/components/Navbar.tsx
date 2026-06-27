import Link from "next/link";
import { getLocale } from "@/app/lib/locale";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_LINKS = [
    { href: "/series", label: "Series" },
    { href: "/notes",  label: "Notes"  },
    { href: "/about",  label: "About"  },
];

export default async function Navbar() {
    const locale = await getLocale();

    return (
        <header className="w-full border-b border-black/10">
            <nav className="max-w-2xl mx-auto px-4 py-4 flex items-baseline justify-between">

                {/* Wordmark */}
                <Link
                    href="/"
                    className="font-serif text-lg tracking-tight text-black leading-none"
                >
                    ARCHIVE
                </Link>

                <div className="flex items-center gap-7">
                    {/* Navigation */}
                    <ul className="flex items-center gap-7">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="
                                        text-[0.65rem] font-sans tracking-[0.15em] uppercase
                                        text-black/50 hover:text-[#d4510a]
                                        transition-colors duration-200
                                    "
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <LanguageSwitcher current={locale} />
                </div>

            </nav>
        </header>
    );
}