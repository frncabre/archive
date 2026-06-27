import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'localeText',
  title: 'Texto largo localizado',
  type: 'object',
  options: {collapsible: true, collapsed: false},
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'de',
      title: 'Deutsch',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {title: 'en'},
  },
})