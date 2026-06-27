import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'localeString',
  title: 'Texto localizado',
  type: 'object',
  options: {
    aiAssist: {
      translateAction: true,
    },
  },
  fields: [
    defineField({name: 'es', title: 'Español', type: 'string'}),
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'de', title: 'Deutsch', type: 'string'}),
  ],
  preview: {
    select: {title: 'en'},
  },
})