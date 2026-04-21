import Link from "next/link"
import { Dumbbell, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Dumbbell className="size-6 text-primary" />
              <span className="font-heading text-lg font-bold tracking-widest text-white uppercase">
                PMI Total Fitness
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Your local gym and fitness center in Waterville, MN. Strong community, serious results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm">
              {[
                { href: "/membership", label: "Membership" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://pmi-total-fitness.sanity.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
              >
                Website Login
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0 text-primary" />
                <span>124 S. 2nd St.<br />Waterville, MN 56096</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href="tel:5073624227" className="hover:text-primary transition-colors">(507) 362-4227</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:pmi.totalfitness@hotmail.com" className="hover:text-primary transition-colors">pmi.totalfitness@hotmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="size-4 mt-0.5 shrink-0 text-primary" />
                <span>Mon/Wed/Fri 8am–5pm<br />Sat 9am–1pm<br />Or by appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-700" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-zinc-500 md:flex-row">
          <p>© 2025 PMI Total Fitness. All rights reserved.</p>
          <p>Waterville, MN 56096</p>
        </div>
      </div>
    </footer>
  )
}
