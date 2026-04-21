import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// These types were created via migration and have auto-generated IDs — show the document list
const existingTypes = [
  { id: 'navigation', title: 'Navigation' },
  { id: 'homePage', title: 'Home Page' },
  { id: 'contactPage', title: 'Contact Page' },
  { id: 'membershipPage', title: 'Membership Page' },
  { id: 'servicesPage', title: 'Services Page' },
]

// These types are new singletons with no existing document — pin to a fixed ID
const newSingletons = [
  { id: 'siteSettings', title: 'Site Settings' },
  { id: 'aboutPage', title: 'About Page' },
]

export default defineConfig({
  name: 'default',
  title: 'PMI Total Fitness',

  projectId: '5cu77e0v',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...newSingletons.map(({ id, title }) =>
              S.listItem()
                .title(title)
                .id(id)
                .child(
                  S.document()
                    .schemaType(id)
                    .documentId(id)
                )
            ),
            ...existingTypes.map(({ id, title }) =>
              S.listItem()
                .title(title)
                .id(id)
                .child(
                  S.documentTypeList(id).title(title)
                )
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
