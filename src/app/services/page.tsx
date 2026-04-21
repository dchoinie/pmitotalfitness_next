import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sun, Heart, Users, ChevronRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Member discounts on tanning, massage, personal training, and more."
      />

      {/* Tanning */}
      <section id="tanning" className="py-16 md:py-24 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sun className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">Tanning</h2>
              <p className="text-muted-foreground text-sm">Bed & Stand-Up options available</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Member Rates */}
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading uppercase tracking-wide">Member Rates</CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-heading uppercase tracking-wide text-xs">Members</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <RateTable
                  headers={["", "Bed", "Stand-Up"]}
                  rows={[
                    ["Single Session", "$3.50", "$4.50"],
                    ["10 Sessions", "$30.00", "$40.00"],
                    ["1 Month Unlimited", "$40.00", "$50.00"],
                    ["Year Unlimited", "$17.00/mo", "$20.00/mo"],
                  ]}
                />
              </CardContent>
            </Card>

            {/* Public Rates */}
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading uppercase tracking-wide">Public Rates</CardTitle>
                  <Badge variant="secondary" className="font-heading uppercase tracking-wide text-xs">Non-Members</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <RateTable
                  headers={["", "Bed", "Stand-Up"]}
                  rows={[
                    ["Single Session", "$4.50", "$6.00"],
                    ["10 Sessions", "$38.00", "$48.00"],
                    ["1 Month Unlimited", "$45.00", "$58.00"],
                    ["Year Unlimited", "—", "—"],
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Massage */}
      <section id="massage" className="py-16 md:py-24 scroll-mt-16 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Heart className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">Massage</h2>
              <p className="text-muted-foreground text-sm">30-minute and 1-hour sessions</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-2xl">
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading uppercase tracking-wide">Member Rates</CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-heading uppercase tracking-wide text-xs">Members</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <RateTable
                  headers={["Duration", "Rate"]}
                  rows={[
                    ["½ Hour", "$30.00"],
                    ["1 Hour", "$50.00"],
                  ]}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading uppercase tracking-wide">Public Rates</CardTitle>
                  <Badge variant="secondary" className="font-heading uppercase tracking-wide text-xs">Non-Members</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <RateTable
                  headers={["Duration", "Rate"]}
                  rows={[
                    ["½ Hour", "$35.00"],
                    ["1 Hour", "$55.00"],
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Personal Training */}
      <section id="personal-training" className="py-16 md:py-24 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">Personal Training</h2>
              <p className="text-muted-foreground text-sm">Individual instruction — multi-session packages & group rates available</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading uppercase tracking-wide">Member Rates</CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-heading uppercase tracking-wide text-xs">Members</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <RateTable
                  headers={["Sessions", "Rate"]}
                  rows={[
                    ["1 Hour", "$35.00/hr"],
                    ["2 Hours", "$65.00"],
                    ["3 Hours", "$90.00"],
                    ["4 Hours", "$112.00"],
                    ["8 Hours", "$200.00"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-4">Multi-session packages & group rates available. Contact us for details.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading uppercase tracking-wide">Public Rates</CardTitle>
                  <Badge variant="secondary" className="font-heading uppercase tracking-wide text-xs">Non-Members</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <RateTable
                  headers={["Sessions", "Rate"]}
                  rows={[
                    ["1 Hour", "$45.00/hr"],
                    ["2 Hours", "$—"],
                    ["3 Hours", "$—"],
                    ["4 Hours", "$—"],
                    ["8 Hours", "$—"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-4">Contact us for public multi-session and group training packages.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">Ready to Get Started?</h2>
          <p className="mt-4 text-zinc-400">Become a member and unlock discounted rates on all our services.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="font-heading uppercase tracking-wide px-8">
              <Link href="/membership">
                View Membership <ChevronRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-heading uppercase tracking-wide px-8 border-zinc-600 text-white hover:bg-zinc-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function RateTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="text-sm">
      <div className={`grid gap-2 font-semibold uppercase tracking-wide text-xs text-muted-foreground mb-2`} style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
        {headers.map((h, i) => <span key={i} className={i > 0 ? "text-center" : ""}>{h}</span>)}
      </div>
      <div className="space-y-2">
        {rows.map((row, ri) => (
          <div key={ri}>
            <div className={`grid gap-2 items-center`} style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
              <span className="text-muted-foreground">{row[0]}</span>
              {row.slice(1).map((cell, ci) => (
                <span key={ci} className="text-center font-semibold text-primary">{cell}</span>
              ))}
            </div>
            {ri < rows.length - 1 && <Separator className="mt-2" />}
          </div>
        ))}
      </div>
    </div>
  )
}
