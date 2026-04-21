import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dumbbell,
  Star,
  Users,
  Zap,
  Heart,
  Sun,
  ChevronRight,
} from "lucide-react"


const membershipHighlights = [
  "Initial personal training session",
  "Equipment instruction & orientation",
  "Unlimited aerobic equipment use",
  "Weight machines & free weights",
  "Locker room access",
  "One monthly guest pass",
  "Discounted tanning, massage & yoga",
]

const services = [
  {
    icon: Sun,
    title: "Tanning",
    description: "Bed and stand-up tanning options with member discounts on single sessions and packages.",
    href: "/services#tanning",
  },
  {
    icon: Heart,
    title: "Massage",
    description: "30-minute and 1-hour massage sessions available at discounted member rates.",
    href: "/services#massage",
  },
  {
    icon: Users,
    title: "Personal Training",
    description: "Individual instruction from certified trainers. Single sessions and multi-session packages available.",
    href: "/services#personal-training",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-zinc-900/90 to-zinc-900" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-40">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 font-heading tracking-widest uppercase text-xs">
              Waterville, MN
            </Badge>
            <h1 className="font-heading text-5xl font-bold uppercase tracking-widest leading-tight md:text-7xl">
              Push Your<br />
              <span className="text-primary">Limits.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-lg">
              PMI Total Fitness is your hometown gym — built for people who are serious about their health.
              Equipment, coaching, and community all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-heading uppercase tracking-wide text-base px-8">
                <Link href="/membership">View Membership</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-heading uppercase tracking-wide text-base px-8 border-zinc-600 text-zinc-900 hover:bg-zinc-800 hover:text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
      </section>

      {/* Stats strip */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {[
              { icon: Dumbbell, label: "Full Weight Room" },
              { icon: Zap, label: "Cardio Equipment" },
              { icon: Users, label: "Personal Training" },
              { icon: Star, label: "Member Perks" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="size-5 opacity-80" />
                <span className="font-heading text-sm font-semibold uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Membership Highlights */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="size-5 text-primary" />
                <span className="font-heading text-xs uppercase tracking-widest text-primary font-semibold">Membership</span>
              </div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">
                Everything You Need
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A PMI Total Fitness membership gives you full access to our facility and a personal introduction
                to everything we offer — so you can hit the ground running.
              </p>
              <ul className="mt-6 space-y-3">
                {membershipHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <div className="mt-1 size-2 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Button asChild className="font-heading uppercase tracking-wide">
                  <Link href="/membership">
                    View Rates <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-white">
              <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-primary mb-6">
                Get Started Today
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                Ready to join? Download our membership form or stop in during open hours.
                We&apos;ll walk you through everything and get you set up.
              </p>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading uppercase tracking-wide">
                  <Link href="/membership">View Membership Info</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full text-zinc-300 hover:text-white hover:bg-zinc-800 font-heading uppercase tracking-wide">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="size-5 text-primary" />
              <span className="font-heading text-xs uppercase tracking-widest text-primary font-semibold">What We Offer</span>
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">Our Services</h2>
            <p className="mt-2 text-muted-foreground">Available to members at discounted rates</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description, href }) => (
              <Card key={title} className="group hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg uppercase tracking-wide">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-heading uppercase tracking-wide text-xs">
                    <Link href={href}>
                      Learn More <ChevronRight className="size-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="font-heading uppercase tracking-wide">
              <Link href="/services">View All Services & Rates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-16 md:py-20 bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">
            Come Visit Us
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">124 S. 2nd St. · Waterville, MN 56096</p>
          <p className="text-zinc-500 text-sm mt-1">
            <a href="tel:5073624227" className="hover:text-primary transition-colors">(507) 362-4227</a>
            {" · "}
            <a href="tel:5073628469" className="hover:text-primary transition-colors">(507) 362-8469 (Cell)</a>
          </p>
          <div className="mt-8">
            <Button asChild className="font-heading uppercase tracking-wide px-8">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
