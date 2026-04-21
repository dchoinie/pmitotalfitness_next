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
  ChevronRight,
} from "lucide-react"

const hours = [
  { day: "Monday", time: "8:00 AM – 5:00 PM", open: true },
  { day: "Tuesday", time: "Closed", open: false },
  { day: "Wednesday", time: "8:00 AM – 5:00 PM", open: true },
  { day: "Thursday", time: "Closed", open: false },
  { day: "Friday", time: "8:00 AM – 5:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 1:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
]

const values = [
  {
    icon: Dumbbell,
    title: "Quality Equipment",
    description: "Full range of aerobic equipment, weight machines, and free weights to support every fitness goal.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Every new member gets a personal training session and guided equipment orientation.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "We're a small-town gym that takes pride in knowing our members and supporting their goals.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Your local fitness center in the heart of Waterville, MN."
      />

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">
                Built for This Community
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PMI Total Fitness has been serving the Waterville, MN area as a dedicated fitness facility
                  for the local community. We believe that access to quality fitness resources shouldn&apos;t require
                  a long drive to a big city.
                </p>
                <p>
                  We offer a full range of cardio and strength equipment, personal training, tanning, and massage
                  services — everything you need in one convenient location. Our staff is here to make sure you feel
                  comfortable and confident every step of the way.
                </p>
                <p>
                  Whether you&apos;re just starting out or looking to take your training to the next level, PMI Total Fitness
                  has a membership and program for you.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="font-heading uppercase tracking-wide">
                  <Link href="/membership">
                    View Membership Options <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hours & Contact */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="size-5 text-primary" />
                    <h3 className="font-heading font-bold uppercase tracking-wide">Open Hours</h3>
                  </div>
                  <div className="space-y-0">
                    {hours.map((entry, i) => (
                      <div key={entry.day}>
                        <div className="flex items-center justify-between py-2">
                          <span className={`text-sm font-medium ${!entry.open ? "text-muted-foreground" : ""}`}>
                            {entry.day}
                          </span>
                          <span className={`text-sm ${entry.open ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                            {entry.time}
                          </span>
                        </div>
                        {i < hours.length - 1 && <Separator />}
                      </div>
                    ))}
                    <div className="pt-3 border-t mt-1">
                      <p className="text-xs text-muted-foreground text-center">* Or by appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="size-5 text-primary" />
                    <h3 className="font-heading font-bold uppercase tracking-wide">Find Us</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p>124 S. 2nd St.</p>
                        <p>Waterville, MN 56096</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="size-4 text-primary shrink-0" />
                      <a href="tel:5073624227" className="hover:text-primary transition-colors">(507) 362-4227</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="size-4 text-primary shrink-0" />
                      <a href="tel:5073628469" className="hover:text-primary transition-colors">(507) 362-8469 (Cell)</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="size-4 text-primary shrink-0" />
                      <a href="mailto:pmi.totalfitness@hotmail.com" className="hover:text-primary transition-colors">
                        pmi.totalfitness@hotmail.com
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardContent className="pt-6 space-y-3">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold uppercase tracking-wide">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">Come Check Us Out</h2>
          <p className="mt-4 text-zinc-400">Stop in during open hours — we&apos;d love to give you a tour.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="font-heading uppercase tracking-wide px-8">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" className="font-heading uppercase tracking-wide px-8 border-zinc-600 text-white hover:bg-zinc-800">
              <Link href="/membership">Join Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
