import { defineType, defineField } from 'sanity'

const tanningRateRow = {
  type: 'object' as const,
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'bed', title: 'Bed Rate', type: 'string' }),
    defineField({ name: 'standup', title: 'Stand-Up Rate', type: 'string' }),
  ],
  preview: { select: { title: 'label' } },
}

const rateRow = {
  type: 'object' as const,
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'rate', title: 'Rate', type: 'string' }),
  ],
  preview: { select: { title: 'label', subtitle: 'rate' } },
}

export const membershipPage = defineType({
  name: 'membershipPage',
  title: 'Membership Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'benefits', title: 'Benefits Section' },
    { name: 'rates', title: 'Member Rates' },
  ],
  fields: [
    defineField({ name: 'pageTitle', title: 'Page Title', type: 'string' }),
    defineField({ name: 'pageSubtitle', title: 'Page Subtitle', type: 'string' }),

    // Benefits
    defineField({ name: 'benefitsEyebrow', title: 'Benefits Eyebrow', type: 'string', group: 'benefits' }),
    defineField({ name: 'benefitsHeading', title: 'Benefits Heading', type: 'string', group: 'benefits' }),
    defineField({ name: 'benefitsDescription', title: 'Benefits Description', type: 'text', rows: 3, group: 'benefits' }),
    defineField({
      name: 'benefits',
      title: 'Benefits List',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'benefits',
    }),
    defineField({ name: 'questionsHeading', title: 'Questions Card Heading', type: 'string', group: 'benefits' }),
    defineField({ name: 'questionsDescription', title: 'Questions Card Description', type: 'text', rows: 2, group: 'benefits' }),

    // Rates
    defineField({ name: 'ratesHeading', title: 'Rates Section Heading', type: 'string', group: 'rates' }),
    defineField({ name: 'ratesSubheading', title: 'Rates Section Subheading', type: 'string', group: 'rates' }),

    defineField({ name: 'tanningRates', title: 'Tanning Member Rates', type: 'array', of: [tanningRateRow], group: 'rates' }),
    defineField({ name: 'massageRates', title: 'Massage Member Rates', type: 'array', of: [rateRow], group: 'rates' }),
    defineField({ name: 'trainingRates', title: 'Personal Training Member Rates', type: 'array', of: [rateRow], group: 'rates' }),
    defineField({ name: 'trainingNote', title: 'Personal Training Footnote', type: 'string', group: 'rates' }),
    defineField({ name: 'ratesFootnote', title: 'Rates Section Footnote', type: 'string', group: 'rates' }),
  ],
})
