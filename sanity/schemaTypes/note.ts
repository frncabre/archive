import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'note',
  title: 'Note',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title.en', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleImage',
      title: 'Imagen principal',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'localeString',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Descripción corta',
      type: 'localeText',
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: 'noteType',
      title: 'Tipo',
      description:
        'Formato editorial. La etiqueta visible en el sitio se traduce en el frontend, no acá.',
      type: 'string',
      options: {
        list: [
          {title: 'Essay', value: 'essay'},
          {title: 'Observation', value: 'observation'},
          {title: 'Field note', value: 'field-note'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Serie',
      type: 'reference',
      to: [{type: 'series'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'localeBlockContent',
    }),
  ],
  orderings: [
    {
      title: 'Más recientes',
      name: 'publishedDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title.en', media: 'titleImage', subtitle: 'noteType'},
  },
})