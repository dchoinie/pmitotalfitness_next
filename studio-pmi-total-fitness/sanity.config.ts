import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletons = [
  { id: 'siteSettings', title: 'Site Settings' },
  { id: 'navigation', title: 'Navigation' },
  { id: 'homePage', title: 'Home Page' },
  { id: 'aboutPage', title: 'About Page' },
  { id: 'contactPage', title: 'Contact Page' },
  { id: 'membershipPage', title: 'Membership Page' },
  { id: 'servicesPage', title: 'Services Page' },
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
          .items(
            singletons.map(({ id, title }) =>
              S.listItem()
                .title(title)
                .id(id)
                .child(
                  S.document()
                    .schemaType(id)
                    .documentId(id)
                )
            )
          ),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
