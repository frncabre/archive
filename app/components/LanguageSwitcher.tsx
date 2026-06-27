"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocaleAction } from "@/app/actions/locale";
import type { Locale } from "@/app/lib/sanity";

const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
};

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value as Locale;
    startTransition(async () => {
      await setLocaleAction(next);
      router.refresh();
    });
  }

  return (
    <select
      value={current}
      onChange={handleChange}
      disabled={isPending}
      aria-label="Select language"
      className="
        bg-transparent border border-black/15 rounded-sm
        px-1.5 py-1 cursor-pointer
        text-[0.65rem] font-sans tracking-[0.15em] uppercase
        text-black/50 hover:text-[#d4510a] hover:border-[#d4510a]/40
        focus:outline-none focus:ring-1 focus:ring-[#d4510a]/40
        transition-colors duration-200
        disabled:opacity-50
      "
    >
      {(Object.keys(LOCALE_LABELS) as Locale[]).map((loc) => (
        <option key={loc} value={loc}>
          {LOCALE_LABELS[loc]}
        </option>
      ))}
    </select>
  )
}