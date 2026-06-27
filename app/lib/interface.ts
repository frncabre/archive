export interface SeriesRef {
  title: string
  slug: string
}

export interface SimpleNoteCard {
  title: string
  excerpt: string
  currentSlug: string
  titleImage: any
  noteType?: string
  publishedAt?: string
  series?: SeriesRef | null
}

export interface FullNote extends SimpleNoteCard {
  content: any[] // Portable Text del idioma ya resuelto
}

export interface SeriesListItem {
  title: string
  slug: string
  number: string
  description: string
  status: 'active' | 'upcoming' | 'archived'
  notesCount: number
}

export interface SiteSettingsData {
  tagline?: string
  intro?: string
  description?: any[] // Portable Text
  founded?: string
  language?: string
  format?: string
  founderName?: string
  contactEmail?: string
  currentSeries?: SeriesRef | null
}

export interface SeriesDetail {
  title: string
  slug: string
  number: string
  description: string
  status: 'active' | 'upcoming' | 'archived'
  notes: SimpleNoteCard[]
}