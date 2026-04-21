import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadingLine1',
      title: 'Hero Heading Line 1',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadingLine2',
      title: 'Hero Heading Line 2 (highlighted)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroCta1Label',
      title: 'Primary CTA Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCta1Href',
      title: 'Primary CTA Link',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCta2Label',
      title: 'Secondary CTA Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCta2Href',
      title: 'Secondary CTA Link',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroFeatureCardTitle',
      title: 'Feature Card Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroFeatureItems',
      title: 'Feature Card Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'Lucide icon name: Dumbbell, Zap, Users, Heart, Star, Sun' }),
          ],
          preview: { select: { title: 'label', subtitle: 'iconName' } },
        },
      ],
      group: 'hero',
    }),

    // ── Stats Strip ───────────────────────────────────────────────────────
    defineField({
      name: 'statsItems',
      title: 'Stats Strip Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'Lucide icon name: Dumbbell, Zap, Users, Star' }),
          ],
          preview: { select: { title: 'label' } },
        },
      ],
      group: 'stats',
    }),

    // ── Membership ────────────────────────────────────────────────────────
    defineField({
      name: 'membershipEyebrow',
      title: 'Membership Eyebrow',
      type: 'string',
      group: 'membership',
    }),
    defineField({
      name: 'membershipHeading',
      title: 'Membership Heading',
      type: 'string',
      group: 'membership',
    }),
    defineField({
      name: 'membershipDescription',
      title: 'Membership Description',
      type: 'text',
      rows: 3,
      group: 'membership',
    }),
    defineField({
      name: 'membershipHighlights',
      title: 'Membership Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'membership',
    }),
    defineField({
      name: 'getStartedHeading',
      title: 'Get Started Card Heading',
      type: 'string',
      group: 'membership',
    }),
    defineField({
      name: 'getStartedDescription',
      title: 'Get Started Card Description',
      type: 'text',
      rows: 3,
      group: 'membership',
    }),

    // ── Services ──────────────────────────────────────────────────────────
    defineField({
      name: 'servicesEyebrow',
      title: 'Services Eyebrow',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesHeading',
      title: 'Services Heading',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesSubheading',
      title: 'Services Subheading',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'href', title: 'Link', type: 'string' }),
            defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'Lucide icon name: Sun, Heart, Users' }),
          ],
          preview: { select: { title: 'title', subtitle: 'href' } },
        },
      ],
      group: 'services',
    }),

    // ── Location CTA ──────────────────────────────────────────────────────
    defineField({
      name: 'locationHeading',
      title: 'Location CTA Heading',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'locationAddress',
      title: 'Address',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'locationPhone1',
      title: 'Phone 1 (digits only, for tel: link)',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'locationPhone1Display',
      title: 'Phone 1 Display',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'locationPhone2',
      title: 'Phone 2 (digits only, for tel: link)',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'locationPhone2Display',
      title: 'Phone 2 Display',
      type: 'string',
      group: 'location',
    }),
  ],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'stats', title: 'Stats Strip' },
    { name: 'membership', title: 'Membership' },
    { name: 'services', title: 'Services' },
    { name: 'location', title: 'Location CTA' },
  ],
})
