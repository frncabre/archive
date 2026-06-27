import {type SchemaTypeDefinition} from 'sanity'

import localeString from './objects/localeString'
import localeText from './objects/localeText'
import localeBlockContent from './objects/localeBlockContent'

import note from './note'
import series from './series'
import siteSettings from './siteSettings'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    // objetos reutilizables de traducción
    localeString,
    localeText,
    localeBlockContent,
    // documentos
    note,
    series,
    siteSettings,
  ],
}