import type {StructureResolver} from 'sanity/structure'

// Tipos de documento que deben existir una sola vez en todo el dataset
export const SINGLETON_TYPES = new Set(['siteSettings'])
export const SINGLETON_ACTIONS = new Set(['publish', 'discardChanges', 'restore'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton: siempre apunta al mismo _id, sin "crear nuevo"
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .icon(() => '⚙️')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),

      S.divider(),

      // El resto de los tipos, excluyendo los singletons
      ...S.documentTypeListItems().filter(
        (listItem) => !SINGLETON_TYPES.has(listItem.getId() as string)
      ),
    ])