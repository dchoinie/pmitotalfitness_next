"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react"

const hours = [
  { day: "Monday", time: "8:00 AM – 5:00 PM", open: true },
  { day: "Tuesday", time: "Closed", open: false },
  { day: "Wednesday", time: "8:00 AM – 5:00 PM", open: true },
  { day: "Thursday", time: "Closed", open: false },
  { day: "Friday", time: "8:00 AM – 5:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 1:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        const data = await res.json()
        setErrorMessage(data.error || "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setErrorMessage("Unable to send message. Please try again or contact us directly.")
      setStatus("error")
    }
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question? We'd love to hear from you."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-widest mb-6">Send a Message</h2>

              {status === "success" ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                  <CheckCircle2 className="size-12 text-green-500 mx-auto mb-3" />
                  <h3 className="font-heading font-bold uppercase tracking-wide text-green-800">Message Sent!</h3>
                  <p className="text-sm text-green-700 mt-2">
                    Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 font-heading uppercase tracking-wide border-green-400 text-green-700 hover:bg-green-100"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(507) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Membership inquiry, etc."
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="size-4 mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full font-heading uppercase tracking-wide"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We&apos;ll respond as soon as possible during business hours.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-widest mb-6">Get In Touch</h2>
              </div>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Address</p>
                      <p className="text-sm text-muted-foreground">124 S. 2nd St.</p>
                      <p className="text-sm text-muted-foreground">Waterville, MN 56096</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="size-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Phone</p>
                      <a href="tel:5073624227" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                        (507) 362-4227
                      </a>
                      <a href="tel:5073628469" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                        (507) 362-8469 (Cell)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <a
                        href="mailto:pmi.totalfitness@hotmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        pmi.totalfitness@hotmail.com
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
                    {hours.map((entry) => (
                      <div key={entry.day} className="flex items-center justify-between py-1 text-sm">
                        <span className={entry.open ? "font-medium" : "text-muted-foreground"}>{entry.day}</span>
                        <span className={entry.open ? "text-primary font-semibold" : "text-muted-foreground"}>
                          {entry.time}
                        </span>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground mt-2 pt-2 border-t text-center">* Or by appointment</p>
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
