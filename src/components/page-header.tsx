import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  className?: string
  dark?: boolean
}

export function PageHeader({ title, subtitle, className, dark = false }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-zinc-900 text-white" : "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-widest md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className={cn("mt-4 text-lg max-w-2xl mx-auto", dark ? "text-zinc-400" : "text-primary-foreground/80")}>
            {subtitle}
          </p>
        )}
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-20 rounded-full bg-current opacity-40" />
        </div>
      </div>
    </section>
  )
}
