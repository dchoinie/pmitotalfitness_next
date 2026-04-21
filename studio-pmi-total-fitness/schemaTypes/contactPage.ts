import { defineType, defineField } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'pageTitle', title: 'Page Title', type: 'string' }),
    defineField({ name: 'pageSubtitle', title: 'Page Subtitle', type: 'string' }),
    defineField({ name: 'formHeading', title: 'Form Section Heading', type: 'string' }),
    defineField({ name: 'infoHeading', title: 'Info Section Heading', type: 'string' }),

    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'addressLine2', title: 'Address Line 2', type: 'string' }),
    defineField({ name: 'phone1', title: 'Phone 1 (digits only)', type: 'string' }),
    defineField({ name: 'phone1Display', title: 'Phone 1 Display', type: 'string' }),
    defineField({ name: 'phone2', title: 'Phone 2 (digits only)', type: 'string' }),
    defineField({ name: 'phone2Display', title: 'Phone 2 Display', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),

    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'day', title: 'Day', type: 'string' }),
            defineField({ name: 'time', title: 'Time (e.g. 8:00 AM – 5:00 PM or Closed)', type: 'string' }),
            defineField({ name: 'open', title: 'Open?', type: 'boolean' }),
          ],
          preview: { select: { title: 'day', subtitle: 'time' } },
        },
      ],
    }),
    defineField({ name: 'hoursNote', title: 'Hours Footnote', type: 'string' }),
  ],
})
