import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, FileText, QrCode, ChevronRight } from "lucide-react"

const membershipIncludes = [
  "Initial personal training session",
  "Instruction on all equipment",
  "Unlimited aerobic equipment use",
  "Weight machines & free weights",
  "Full locker room access",
  "One monthly guest pass",
  "Discounted rates on Massage",
  "Discounted rates on Tanning",
  "Discounted rates on Yoga",
  "Discounted Personal Training rates",
]

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        title="Membership"
        subtitle="Everything you need to reach your fitness goals — all in one place."
      />

      {/* Membership Includes */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="size-5 text-primary" />
                <span className="font-heading text-xs uppercase tracking-widest text-primary font-semibold">What&apos;s Included</span>
              </div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">
                Membership Benefits
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Your PMI Total Fitness membership comes with everything you need to get started
                and keep going — from your first session to ongoing access.
              </p>
              <ul className="mt-6 space-y-3">
                {membershipIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sign Up Options */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="size-5 text-primary" />
                    <CardTitle className="font-heading uppercase tracking-wide">Membership Form</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Download and fill out our membership registration form, then bring it in during open hours or email it to us.
                  </p>
                  <Button asChild className="w-full font-heading uppercase tracking-wide">
                    <Link href="/membership/form">
                      <FileText className="size-4" />
                      View & Print Registration Form
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <QrCode className="size-5 text-primary" />
                    <CardTitle className="font-heading uppercase tracking-wide">Pay via Venmo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Scan the QR code below to send your membership payment through Venmo.
                  </p>
                  <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/40 p-8">
                    <div className="text-center space-y-2">
                      <QrCode className="size-16 text-muted-foreground mx-auto" />
                      <p className="text-xs text-muted-foreground">
                        Add your Venmo QR code image to{" "}
                        <code className="bg-muted px-1 rounded text-xs">/public/venmo-qr.png</code>
                        {" "}and replace this placeholder.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Contact us if you have questions about payment options.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-heading font-bold uppercase tracking-wide">Questions?</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Stop in during open hours or give us a call — we&apos;d love to give you a tour.
                  </p>
                  <Button asChild variant="secondary" className="mt-2 font-heading uppercase tracking-wide w-full">
                    <Link href="/contact">Contact Us <ChevronRight className="size-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Rates */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-widest md:text-4xl">
              Member Rates
            </h2>
            <p className="mt-2 text-muted-foreground">Members enjoy discounted rates on all additional services</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Tanning */}
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading text-lg uppercase tracking-wide">Tanning</CardTitle>
                  <Badge variant="secondary" className="font-heading uppercase tracking-wide text-xs">Member Discount</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div>
                    <div className="grid grid-cols-3 gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      <span></span>
                      <span className="text-center">Bed</span>
                      <span className="text-center">Stand-Up</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <span className="text-muted-foreground">Single</span>
                        <span className="text-center font-semibold text-primary">$3.50</span>
                        <span className="text-center font-semibold text-primary">$4.50</span>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <span className="text-muted-foreground">10 Sessions</span>
                        <span className="text-center font-semibold text-primary">$30.00</span>
                        <span className="text-center font-semibold text-primary">$40.00</span>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <span className="text-muted-foreground">1 Mo. Unlimited</span>
                        <span className="text-center font-semibold text-primary">$40.00</span>
                        <span className="text-center font-semibold text-primary">$50.00</span>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <span className="text-muted-foreground">Year Unlimited</span>
                        <span className="text-center font-semibold text-primary">$17.00</span>
                        <span className="text-center font-semibold text-primary">$20.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Massage */}
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading text-lg uppercase tracking-wide">Massage</CardTitle>
                  <Badge variant="secondary" className="font-heading uppercase tracking-wide text-xs">Member Discount</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">½ Hour</span>
                    <span className="font-semibold text-primary text-lg">$30.00</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">1 Hour</span>
                    <span className="font-semibold text-primary text-lg">$50.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Training */}
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading text-lg uppercase tracking-wide">Personal Training</CardTitle>
                  <Badge variant="secondary" className="font-heading uppercase tracking-wide text-xs">Member Discount</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">1 Hour</span>
                    <span className="font-semibold text-primary">$35.00</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">2 Hours</span>
                    <span className="font-semibold text-primary">$65.00</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">3 Hours</span>
                    <span className="font-semibold text-primary">$90.00</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">4 Hours</span>
                    <span className="font-semibold text-primary">$112.00</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">8 Hours</span>
                    <span className="font-semibold text-primary">$200.00</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Multi-session packages & group rates available.</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            * Member rates listed. See <Link href="/services" className="text-primary hover:underline">Services page</Link> for public rates.
          </p>
        </div>
      </section>
    </>
  )
}
