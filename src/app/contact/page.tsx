import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { getContactPageData } from "@/lib/queries"

export default async function ContactPage() {
  const data = await getContactPageData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-muted-foreground">
        Contact page content not found in Sanity.
      </div>
    )
  }

  return (
    <>
      <PageHeader title={data.pageTitle} subtitle={data.pageSubtitle} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-widest mb-6">
                {data.formHeading}
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-widest">
                {data.infoHeading}
              </h2>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Address</p>
                      <p className="text-sm text-muted-foreground">{data.address}</p>
                      <p className="text-sm text-muted-foreground">{data.addressLine2}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="size-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Phone</p>
                      <a
                        href={`tel:${data.phone1}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {data.phone1Display}
                      </a>
                      <a
                        href={`tel:${data.phone2}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {data.phone2Display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <a
                        href={`mailto:${data.email}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {data.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="size-5 text-primary" />
                    <p className="font-semibold text-sm">Open Hours</p>
                  </div>
                  <div className="space-y-1">
                    {data.hours.map((entry) => (
                      <div key={entry.day} className="flex items-center justify-between py-1 text-sm">
                        <span className={entry.open ? "font-medium" : "text-muted-foreground"}>
                          {entry.day}
                        </span>
                        <span className={entry.open ? "text-primary font-semibold" : "text-muted-foreground"}>
                          {entry.time}
                        </span>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground mt-2 pt-2 border-t text-center">
                      {data.hoursNote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
