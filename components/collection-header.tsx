import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function CollectionHeader() {
  return (
    <header className="relative py-24 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Freshly</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-border text-foreground hover:bg-accent bg-transparent gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center pt-16">
        <span className="inline-block px-4 py-2 rounded-full bg-accent border border-border text-sm text-muted-foreground mb-6">
          Premium Selection
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Our Fruit <span className="text-primary">Collection</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Explore our complete range of fresh, organic fruits sourced from the finest orchards around the world.
        </p>
      </div>
    </header>
  )
}
