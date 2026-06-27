import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'localeBlockContent',
  title: 'Contenido enriquecido localizado',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'de',
      title: 'Deutsch',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),
  ],
})
