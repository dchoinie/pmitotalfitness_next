import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Dumbbell,
  Users,
  Heart,
  Star,
  Zap,
  Sun,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"
import { getAboutPageData, getSiteSettings } from "@/lib/queries"

const ICON_MAP: Record<string, LucideIcon> = {
  Dumbbell,
  Users,
  Heart,
  Star,
  Zap,
  Sun,
}

const DEFAULT_PARAGRAPHS = [
  "PMI Total Fitness has been serving the Waterville, MN area as a dedicated fitness facility for the local community. We believe that access to quality fitness resources shouldn't require a long drive to a big city.",
  "We offer a full range of cardio and strength equipment, personal training, tanning, and massage services — everything you need in one convenient location. Our staff is here to make sure you feel comfortable and confident every step of the way.",
  "Whether you're just starting out or looking to take your training to the next level, PMI Total Fitness has a membership and program for you.",
]

const DEFAULT_VALUES = [
  { iconName: "Dumbbell", title: "Quality Equipment", description: "Full range of aerobic equipment, weight machines, and free weights to support every fitness goal." },
  { iconName: "Users", title: "Personal Attention", description: "Every new member gets a personal training session and guided equipment orientation." },
  { iconName: "Heart", title: "Community First", description: "We're a small-town gym that takes pride in knowing our members and supporting their goals." },
]

export default async function AboutPage() {
  const [about, site] = await Promise.all([getAboutPageData(), getSiteSettings()])

  const paragraphs = about?.bodyParagraphs?.length ? about.bodyParagraphs : DEFAULT_PARAGRAPHS
  const values = about?.values?.length ? about.values : DEFAULT_VALUES

  return (
    <>
      <PageHeader
        title={about?.pageTitle ?? "About Us"}
        subtitle={about?.pageSubtitle ?? "Your local fitness center in the heart of Waterville, MN."}
      />

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">
                {about?.bodySectionHeading ?? "Built for This Community"}
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="font-heading uppercase tracking-wide">
                  <Link href={about?.ctaButtonHref ?? "/membership"}>
                    {about?.ctaButtonLabel ?? "View Membership Options"} <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hours & Contact */}
            <div className="space-y-6">
              {site?.hours && site.hours.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="size-5 text-primary" />
                      <h3 className="font-heading font-bold uppercase tracking-wide">Open Hours</h3>
                    </div>
                    <div className="space-y-0">
                      {site.hours.map((entry, i) => (
                        <div key={entry.day}>
                          <div className="flex items-center justify-between py-2">
                            <span className={`text-sm font-medium ${!entry.open ? "text-muted-foreground" : ""}`}>
                              {entry.day}
                            </span>
                            <span className={`text-sm ${entry.open ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                              {entry.time}
                            </span>
                          </div>
                          {i < site.hours.length - 1 && <Separator />}
                        </div>
                      ))}
                      {site.hoursNote && (
                        <div className="pt-3 border-t mt-1">
                          <p className="text-xs text-muted-foreground text-center">* {site.hoursNote}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {site && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="size-5 text-primary" />
                      <h3 className="font-heading font-bold uppercase tracking-wide">Find Us</h3>
                    </div>
                    <ul className="space-y-3 text-sm">
                      {site.address && (
                        <li className="flex items-start gap-3">
                          <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p>{site.address}</p>
                            {site.addressLine2 && <p>{site.addressLine2}</p>}
                          </div>
                        </li>
                      )}
                      {site.phone1 && (
                        <li className="flex items-center gap-3">
                          <Phone className="size-4 text-primary shrink-0" />
                          <a href={`tel:${site.phone1}`} className="hover:text-primary transition-colors">
                            {site.phone1Display ?? site.phone1}
                          </a>
                        </li>
                      )}
                      {site.phone2 && (
                        <li className="flex items-center gap-3">
                          <Phone className="size-4 text-primary shrink-0" />
                          <a href={`tel:${site.phone2}`} className="hover:text-primary transition-colors">
                            {site.phone2Display ?? site.phone2}
                          </a>
                        </li>
                      )}
                      {site.email && (
                        <li className="flex items-center gap-3">
                          <Mail className="size-4 text-primary shrink-0" />
                          <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">
                            {site.email}
                          </a>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">
              {about?.valuesHeading ?? "What Sets Us Apart"}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ iconName, title, description }) => {
              const Icon = ICON_MAP[iconName] ?? Dumbbell
              return (
                <Card key={title}>
                  <CardContent className="pt-6 space-y-3">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold uppercase tracking-wide">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">
            {about?.closingCtaHeading ?? "Come Check Us Out"}
          </h2>
          <p className="mt-4 text-zinc-400">
            {about?.closingCtaDescription ?? "Stop in during open hours — we'd love to give you a tour."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="font-heading uppercase tracking-wide px-8">
              <Link href={about?.closingCta1Href ?? "/contact"}>
                {about?.closingCta1Label ?? "Get In Touch"}
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-heading uppercase tracking-wide px-8 border-zinc-600 text-white hover:bg-zinc-800">
              <Link href={about?.closingCta2Href ?? "/membership"}>
                {about?.closingCta2Label ?? "Join Now"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
