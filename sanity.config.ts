'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {assist} from '@sanity/assist'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    assist({
      translate: {
        // "Prompt" / instrucciones de estilo para el agente de traducción.
        // Límite: 2000 caracteres.
        styleguide: `
El idioma de referencia y fuente de verdad de todo el contenido es el Español (es).
Cuando falte una traducción, traducila siempre a partir del campo "es" — nunca a partir de otro idioma derivado (en o de).
Mantené el tono editorial de una revista de cultura contemporánea: culto, sobrio y preciso; nunca publicitario ni casual.
No traduzcas nombres propios, nombres de series, ni términos de arte que ya tengan un uso establecido en el idioma de destino.
Conservá el formato del Portable Text (negritas, encabezados, links) exactamente como está en el original.
        `.trim(),
        field: {
          documentTypes: ['note', 'series', 'siteSettings'],
          languages: [
            {id: 'es', title: 'Español'},
            {id: 'en', title: 'English'},
            {id: 'de', title: 'Deutsch'},
          ],
        },
      },
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})