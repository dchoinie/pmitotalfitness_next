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

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'tanning', title: 'Tanning' },
    { name: 'massage', title: 'Massage' },
    { name: 'training', title: 'Personal Training' },
    { name: 'cta', title: 'CTA' },
  ],
  fields: [
    defineField({ name: 'pageTitle', title: 'Page Title', type: 'string' }),
    defineField({ name: 'pageSubtitle', title: 'Page Subtitle', type: 'string' }),

    // Tanning
    defineField({ name: 'tanningHeading', title: 'Tanning Heading', type: 'string', group: 'tanning' }),
    defineField({ name: 'tanningSubtitle', title: 'Tanning Subtitle', type: 'string', group: 'tanning' }),
    defineField({ name: 'tanningMemberRates', title: 'Tanning Member Rates', type: 'array', of: [tanningRateRow], group: 'tanning' }),
    defineField({ name: 'tanningPublicRates', title: 'Tanning Public Rates', type: 'array', of: [tanningRateRow], group: 'tanning' }),

    // Massage
    defineField({ name: 'massageHeading', title: 'Massage Heading', type: 'string', group: 'massage' }),
    defineField({ name: 'massageSubtitle', title: 'Massage Subtitle', type: 'string', group: 'massage' }),
    defineField({ name: 'massageMemberRates', title: 'Massage Member Rates', type: 'array', of: [rateRow], group: 'massage' }),
    defineField({ name: 'massagePublicRates', title: 'Massage Public Rates', type: 'array', of: [rateRow], group: 'massage' }),

    // Personal Training
    defineField({ name: 'trainingHeading', title: 'Personal Training Heading', type: 'string', group: 'training' }),
    defineField({ name: 'trainingSubtitle', title: 'Personal Training Subtitle', type: 'string', group: 'training' }),
    defineField({ name: 'trainingMemberRates', title: 'Training Member Rates', type: 'array', of: [rateRow], group: 'training' }),
    defineField({ name: 'trainingPublicRates', title: 'Training Public Rates', type: 'array', of: [rateRow], group: 'training' }),
    defineField({ name: 'trainingMemberNote', title: 'Training Member Footnote', type: 'string', group: 'training' }),
    defineField({ name: 'trainingPublicNote', title: 'Training Public Footnote', type: 'string', group: 'training' }),

    // CTA
    defineField({ name: 'ctaHeading', title: 'CTA Heading', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaSubheading', title: 'CTA Subheading', type: 'string', group: 'cta' }),
  ],
})
