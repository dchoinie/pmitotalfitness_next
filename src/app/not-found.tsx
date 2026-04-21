import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <Dumbbell className="size-16 text-primary mb-6" />
      <h1 className="font-heading text-5xl font-bold uppercase tracking-widest mb-4">404</h1>
      <p className="text-muted-foreground text-lg mb-8">Page not found.</p>
      <Button asChild className="font-heading uppercase tracking-wide">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}
