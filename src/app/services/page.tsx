import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sun, Heart, Users, ChevronRight } from "lucide-react"
import { getServicesPageData, type TanningRateRow, type RateRow } from "@/lib/queries"

function TanningRateTable({ headers, rows }: { headers: string[]; rows: TanningRateRow[] }) {
  return (
    <div className="text-sm">
      <div className="grid grid-cols-3 gap-2 font-semibold uppercase tracking-wide text-xs text-muted-foreground mb-2">
        {headers.map((h, i) => <span key={i} className={i > 0 ? "text-center" : ""}>{h}</span>)}
      </div>
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={row.label}>
            <div className="grid grid-cols-3 gap-2 items-center">
              <span className="text-muted-foreground">{row.label}</span>
              <span className="text-center font-semibold text-primary">{row.bed}</span>
              <span className="text-center font-semibold text-primary">{row.standup}</span>
            </div>
            {i < rows.length - 1 && <Separator className="mt-2" />}
          </div>
        ))}
      </div>
    </div>
  )
}

function SimpleRateTable({ headers, rows }: { headers: string[]; rows: RateRow[] }) {
  return (
    <div className="text-sm">
      <div className="grid grid-cols-2 gap-2 font-semibold uppercase tracking-wide text-xs text-muted-foreground mb-2">
        {headers.map((h, i) => <span key={i} className={i > 0 ? "text-center" : ""}>{h}</span>)}
      </div>
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={row.label}>
            <div className="grid grid-cols-2 gap-2 items-center">
              <span className="text-muted-foreground">{row.label}</span>
              <span className="text-center font-semibold text-primary">{row.rate}</span>
            </div>
            {i < rows.length - 1 && <Separator className="mt-2" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function ServicesPage() {
  const data = await getServicesPageData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-muted-foreground">
        Services page content not found in Sanity.
      </div>
    )
  }

  return (
    <>
      <PageHeader title={data.pageTitle} subtitle={data.pageSubtitle} />

      {/* Tanning */}
      <section id="tanning" className="py-16 md:py-24 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sun className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">{data.tanningHeading}</h2>
              <p className="text-muted-foreground text-sm">{data.tanningSubtitle}</p>
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
                <TanningRateTable headers={["", "Bed", "Stand-Up"]} rows={data.tanningMemberRates} />
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
                <TanningRateTable headers={["", "Bed", "Stand-Up"]} rows={data.tanningPublicRates} />
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
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">{data.massageHeading}</h2>
              <p className="text-muted-foreground text-sm">{data.massageSubtitle}</p>
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
                <SimpleRateTable headers={["Duration", "Rate"]} rows={data.massageMemberRates} />
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
                <SimpleRateTable headers={["Duration", "Rate"]} rows={data.massagePublicRates} />
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
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">{data.trainingHeading}</h2>
              <p className="text-muted-foreground text-sm">{data.trainingSubtitle}</p>
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
                <SimpleRateTable headers={["Sessions", "Rate"]} rows={data.trainingMemberRates} />
                {data.trainingMemberNote && (
                  <p className="text-xs text-muted-foreground mt-4">{data.trainingMemberNote}</p>
                )}
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
                <SimpleRateTable headers={["Sessions", "Rate"]} rows={data.trainingPublicRates} />
                {data.trainingPublicNote && (
                  <p className="text-xs text-muted-foreground mt-4">{data.trainingPublicNote}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-widest">{data.ctaHeading}</h2>
          <p className="mt-4 text-zinc-400">{data.ctaSubheading}</p>
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
