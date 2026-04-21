import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'pageTitle', title: 'Page Title', type: 'string', group: 'header' }),
    defineField({ name: 'pageSubtitle', title: 'Page Subtitle', type: 'string', group: 'header' }),

    defineField({
      name: 'bodySectionHeading',
      title: 'Body Section Heading',
      type: 'string',
      group: 'body',
    }),
    defineField({
      name: 'bodyParagraphs',
      title: 'Body Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'body',
    }),
    defineField({ name: 'ctaButtonLabel', title: 'Body CTA Button Label', type: 'string', group: 'body' }),
    defineField({ name: 'ctaButtonHref', title: 'Body CTA Button Link', type: 'string', group: 'body' }),

    defineField({ name: 'valuesHeading', title: 'Values Section Heading', type: 'string', group: 'values' }),
    defineField({
      name: 'values',
      title: 'Values Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name: Dumbbell, Users, Heart, Star, Zap, Sun',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'iconName' } },
        },
      ],
      group: 'values',
    }),

    defineField({ name: 'closingCtaHeading', title: 'Closing CTA Heading', type: 'string', group: 'cta' }),
    defineField({ name: 'closingCtaDescription', title: 'Closing CTA Description', type: 'text', rows: 2, group: 'cta' }),
    defineField({ name: 'closingCta1Label', title: 'Primary CTA Label', type: 'string', group: 'cta' }),
    defineField({ name: 'closingCta1Href', title: 'Primary CTA Link', type: 'string', group: 'cta' }),
    defineField({ name: 'closingCta2Label', title: 'Secondary CTA Label', type: 'string', group: 'cta' }),
    defineField({ name: 'closingCta2Href', title: 'Secondary CTA Link', type: 'string', group: 'cta' }),
  ],
  groups: [
    { name: 'header', title: 'Page Header' },
    { name: 'body', title: 'About Body' },
    { name: 'values', title: 'Values Section' },
    { name: 'cta', title: 'Closing CTA' },
  ],
})
