import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'businessName', title: 'Business Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'address', title: 'Address Line 1', type: 'string' }),
    defineField({ name: 'addressLine2', title: 'Address Line 2 (City, State, Zip)', type: 'string' }),
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
