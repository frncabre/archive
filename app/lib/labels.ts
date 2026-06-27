import type { Locale } from "./sanity";

const NOTE_TYPE_LABELS: Record<string, Record<Locale, string>> = {
  essay: { es: "Ensayo", en: "Essay", de: "Essay" },
  observation: { es: "Observación", en: "Observation", de: "Beobachtung" },
  "field-note": { es: "Nota de campo", en: "Field note", de: "Feldnotiz" },
};

export function typeLabel(noteType: string | undefined, lang: Locale): string {
  if (!noteType) return "";
  return NOTE_TYPE_LABELS[noteType]?.[lang] ?? noteType;
}