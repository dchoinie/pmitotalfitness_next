import { sanityClient } from './sanity'

export type NavItem = {
  label: string
  href: string
}

export type HomePageData = {
  heroBadge: string
  heroHeadingLine1: string
  heroHeadingLine2: string
  heroDescription: string
  heroCta1Label: string
  heroCta1Href: string
  heroCta2Label: string
  heroCta2Href: string
  heroFeatureCardTitle: string
  heroFeatureItems: { label: string; iconName: string }[]
  statsItems: { label: string; iconName: string }[]
  membershipEyebrow: string
  membershipHeading: string
  membershipDescription: string
  membershipHighlights: string[]
  getStartedHeading: string
  getStartedDescription: string
  servicesEyebrow: string
  servicesHeading: string
  servicesSubheading: string
  services: { title: string; description: string; href: string; iconName: string }[]
  locationHeading: string
  locationAddress: string
  locationPhone1: string
  locationPhone1Display: string
  locationPhone2: string
  locationPhone2Display: string
}

export type HourEntry = { day: string; time: string; open: boolean }

export type ContactPageData = {
  pageTitle: string
  pageSubtitle: string
  formHeading: string
  infoHeading: string
  address: string
  addressLine2: string
  phone1: string
  phone1Display: string
  phone2: string
  phone2Display: string
  email: string
  hours: HourEntry[]
  hoursNote: string
}

export type TanningRateRow = { label: string; bed: string; standup: string }
export type RateRow = { label: string; rate: string }

export type MembershipPageData = {
  pageTitle: string
  pageSubtitle: string
  benefitsEyebrow: string
  benefitsHeading: string
  benefitsDescription: string
  benefits: string[]
  questionsHeading: string
  questionsDescription: string
  ratesHeading: string
  ratesSubheading: string
  tanningRates: TanningRateRow[]
  massageRates: RateRow[]
  trainingRates: RateRow[]
  trainingNote: string
  ratesFootnote: string
}

export type ServicesPageData = {
  pageTitle: string
  pageSubtitle: string
  tanningHeading: string
  tanningSubtitle: string
  tanningMemberRates: TanningRateRow[]
  tanningPublicRates: TanningRateRow[]
  massageHeading: string
  massageSubtitle: string
  massageMemberRates: RateRow[]
  massagePublicRates: RateRow[]
  trainingHeading: string
  trainingSubtitle: string
  trainingMemberRates: RateRow[]
  trainingPublicRates: RateRow[]
  trainingMemberNote: string
  trainingPublicNote: string
  ctaHeading: string
  ctaSubheading: string
}

const fetchOpts = { next: { revalidate: 60 } }

export async function getNavItems(): Promise<NavItem[]> {
  const data = await sanityClient.fetch<{ navItems: NavItem[] } | null>(
    `*[_type == "navigation"][0]{ navItems }`,
    {},
    fetchOpts
  )
  return data?.navItems ?? []
}

export async function getHomePageData(): Promise<HomePageData | null> {
  return sanityClient.fetch<HomePageData | null>(
    `*[_type == "homePage"][0]{
      heroBadge, heroHeadingLine1, heroHeadingLine2, heroDescription,
      heroCta1Label, heroCta1Href, heroCta2Label, heroCta2Href,
      heroFeatureCardTitle, heroFeatureItems,
      statsItems,
      membershipEyebrow, membershipHeading, membershipDescription,
      membershipHighlights, getStartedHeading, getStartedDescription,
      servicesEyebrow, servicesHeading, servicesSubheading, services,
      locationHeading, locationAddress,
      locationPhone1, locationPhone1Display, locationPhone2, locationPhone2Display
    }`,
    {},
    fetchOpts
  )
}

export async function getContactPageData(): Promise<ContactPageData | null> {
  return sanityClient.fetch<ContactPageData | null>(
    `*[_type == "contactPage"][0]{
      pageTitle, pageSubtitle, formHeading, infoHeading,
      address, addressLine2, phone1, phone1Display, phone2, phone2Display, email,
      hours, hoursNote
    }`,
    {},
    fetchOpts
  )
}

export async function getMembershipPageData(): Promise<MembershipPageData | null> {
  return sanityClient.fetch<MembershipPageData | null>(
    `*[_type == "membershipPage"][0]{
      pageTitle, pageSubtitle,
      benefitsEyebrow, benefitsHeading, benefitsDescription, benefits,
      questionsHeading, questionsDescription,
      ratesHeading, ratesSubheading,
      tanningRates, massageRates, trainingRates, trainingNote, ratesFootnote
    }`,
    {},
    fetchOpts
  )
}

export async function getServicesPageData(): Promise<ServicesPageData | null> {
  return sanityClient.fetch<ServicesPageData | null>(
    `*[_type == "servicesPage"][0]{
      pageTitle, pageSubtitle,
      tanningHeading, tanningSubtitle, tanningMemberRates, tanningPublicRates,
      massageHeading, massageSubtitle, massageMemberRates, massagePublicRates,
      trainingHeading, trainingSubtitle,
      trainingMemberRates, trainingPublicRates, trainingMemberNote, trainingPublicNote,
      ctaHeading, ctaSubheading
    }`,
    {},
    fetchOpts
  )
}
