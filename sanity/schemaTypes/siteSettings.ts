import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'localeString',
    }),
    defineField({
      name: 'intro',
      title: 'Párrafo de apertura',
      type: 'localeText',
    }),
    defineField({
      name: 'description',
      title: 'Cuerpo del About',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'founded',
      title: 'Año de fundación',
      type: 'string',
    }),
    defineField({
      name: 'language',
      title: 'Etiqueta de idioma principal',
      type: 'localeString',
    }),
    defineField({
      name: 'format',
      title: 'Formato',
      type: 'localeString',
    }),
    defineField({
      name: 'founderName',
      title: 'Nombre del fundador/a',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email de contacto',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'currentSeries',
      title: 'Serie actual',
      type: 'reference',
      to: [{type: 'series'}],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site settings'}
    },
  },
})