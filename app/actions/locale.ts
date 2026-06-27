"use server";

import { cookies } from "next/headers";
import { COOKIE_NAME, SUPPORTED_LOCALES } from "@/app/lib/locale";

export async function setLocaleAction(locale: string) {
  if (!SUPPORTED_LOCALES.includes(locale as any)) return;

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 año
    sameSite: "lax",
  });
}