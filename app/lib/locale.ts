import { cookies } from "next/headers";
import { DEFAULT_LOCALE, type Locale } from "./sanity";

const SUPPORTED_LOCALES: Locale[] = ["es", "en", "de"];
const COOKIE_NAME = "locale";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;

  if (value && SUPPORTED_LOCALES.includes(value as Locale)) {
    return value as Locale;
  }

  return DEFAULT_LOCALE;
}

export { COOKIE_NAME, SUPPORTED_LOCALES };