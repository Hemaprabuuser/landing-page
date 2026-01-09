import { Leaf, Truck, Shield, Heart } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our fruits are certified organic, grown without harmful pesticides.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "From farm to your door in 24 hours, ensuring maximum freshness.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Not satisfied? We'll replace or refund your order, no questions asked.",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "Packed with vitamins and nutrients for your well-being.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Why Choose <span className="text-primary">Freshly</span>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe everyone deserves access to fresh, healthy produce. Our commitment to quality and
                sustainability sets us apart.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 p-4 rounded-xl bg-accent/50 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-6">
              <img
                src="/images/vecteezy-fresh-and-sweet-orange-fruit-35912565.png"
                alt="Fresh orange"
                className="w-48 h-48 object-contain justify-self-end translate-y-8"
              />
              <img
                src="/images/vecteezy-ai-generated-fresh-single-strawberry-40350835.jpeg"
                alt="Fresh strawberry"
                className="w-48 h-48 object-contain"
              />
              <img
                src="/images/vecteezy-kiwi-isolated-on-transparent-background-47410681.jpeg"
                alt="Fresh kiwi"
                className="w-48 h-48 object-contain justify-self-end"
              />
              <img
                src="/images/vecteezy-delicious-and-juicy-exploring-the-world-of-nectarine-fruit-47421166.jpeg"
                alt="Fresh nectarine"
                className="w-48 h-48 object-contain -translate-y-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
