import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative fruits */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/vecteezy-fresh-and-sweet-orange-fruit-35912565.png"
          alt=""
          className="absolute -top-20 -right-20 w-80 h-80 object-contain opacity-20 blur-sm"
        />
        <img
          src="/images/vecteezy-ai-generated-fresh-single-strawberry-40350835.jpeg"
          alt=""
          className="absolute -bottom-20 -left-20 w-96 h-96 object-contain opacity-15 blur-sm"
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Freshly</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#fruits" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Fruits
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <Button
            variant="outline"
            className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Shop Now
          </Button>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Farm Fresh Delivery</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance text-foreground">
            Nature's Best, <span className="text-primary">Delivered</span> Fresh
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Experience the vibrant taste of hand-picked, organic fruits delivered straight from our farms to your
            doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Explore Collection
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-accent bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <img
            src="/images/vecteezy-delicious-and-juicy-exploring-the-world-of-nectarine-fruit-47421166.jpeg"
            alt="Fresh juicy nectarine"
            className="relative w-[400px] h-[400px] object-contain drop-shadow-2xl animate-float"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
