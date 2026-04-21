"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dumbbell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/lib/queries"

export function Header({ navLinks }: { navLinks: NavItem[] }) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Dumbbell className="size-6 text-primary" />
          <span className="font-heading text-lg font-bold tracking-widest text-primary uppercase">
            PMI Total Fitness
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "font-medium tracking-wide uppercase text-xs",
                pathname === link.href && "text-primary bg-primary/10"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button asChild size="sm" className="ml-4 uppercase tracking-wide font-heading font-semibold">
            <Link href="/membership">Join Now</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader className="border-b pb-4">
              <SheetTitle className="flex items-center gap-2 font-heading tracking-widest uppercase text-primary">
                <Dumbbell className="size-5" />
                PMI Total Fitness
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  asChild
                  className={cn(
                    "justify-start font-medium uppercase tracking-wide text-sm",
                    pathname === link.href && "text-primary bg-primary/10"
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <div className="pt-4 border-t mt-2">
                <Button asChild className="w-full font-heading uppercase tracking-wide">
                  <Link href="/membership">Join Now</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
