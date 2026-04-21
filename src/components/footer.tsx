import Link from "next/link";
import { Dumbbell, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getSiteSettings } from "@/lib/queries";

export async function Footer() {
  const site = await getSiteSettings();

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Dumbbell className="size-6 text-primary" />
              <span className="font-heading text-lg font-bold tracking-widest text-white uppercase">
                {site?.businessName ?? "PMI Total Fitness"}
              </span>
            </div>
            {site?.tagline && (
              <p className="text-sm text-zinc-400 leading-relaxed">{site.tagline}</p>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 text-sm w-fit">
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
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {site?.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="size-4 mt-0.5 shrink-0 text-primary" />
                  <span>
                    {site.address}
                    {site.addressLine2 && <><br />{site.addressLine2}</>}
                  </span>
                </li>
              )}
              {site?.phone1 && (
                <li className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a href={`tel:${site.phone1}`} className="hover:text-primary transition-colors">
                    {site.phone1Display ?? site.phone1}
                  </a>
                </li>
              )}
              {site?.email && (
                <li className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">
                    {site.email}
                  </a>
                </li>
              )}
              {site?.hours && site.hours.length > 0 && (
                <li className="flex items-start gap-2">
                  <Clock className="size-4 mt-0.5 shrink-0 text-primary" />
                  <span>
                    {site.hours
                      .filter((h) => h.open)
                      .reduce<{ time: string; days: string[] }[]>((acc, h) => {
                        const existing = acc.find((g) => g.time === h.time);
                        if (existing) {
                          existing.days.push(h.day.slice(0, 3));
                        } else {
                          acc.push({ time: h.time, days: [h.day.slice(0, 3)] });
                        }
                        return acc;
                      }, [])
                      .map((g, i) => (
                        <span key={i} className="block">
                          {g.days.join("/")} {g.time}
                        </span>
                      ))}
                    {site.hoursNote && <span className="block">{site.hoursNote}</span>}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-700" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site?.businessName ?? "PMI Total Fitness"}. All rights reserved.
          </p>
          {site?.addressLine2 && <p>{site.addressLine2}</p>}
        </div>
      </div>
    </footer>
  );
}
