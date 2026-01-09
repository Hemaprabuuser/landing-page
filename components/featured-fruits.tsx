import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fruits = [
  {
    name: "Nectarine",
    description: "Sweet and juicy with a smooth skin, perfect for summer snacking.",
    image: "/images/vecteezy-delicious-and-juicy-exploring-the-world-of-nectarine-fruit-47421166.jpeg",
    badge: "Popular",
    price: "$4.99/lb",
  },
  {
    name: "Orange",
    description: "Bursting with vitamin C and natural sweetness.",
    image: "/images/vecteezy-fresh-and-sweet-orange-fruit-35912565.png",
    badge: "Fresh",
    price: "$3.49/lb",
  },
  {
    name: "Kiwi",
    description: "Exotic and tangy, packed with nutrients and fiber.",
    image: "/images/vecteezy-kiwi-isolated-on-transparent-background-47410681.jpeg",
    badge: "Organic",
    price: "$5.99/lb",
  },
  {
    name: "Strawberry",
    description: "Red, ripe, and irresistibly sweet. A classic favorite.",
    image: "/images/vecteezy-ai-generated-fresh-single-strawberry-40350835.jpeg",
    badge: "Seasonal",
    price: "$6.99/lb",
  },
]

export function FeaturedFruits() {
  return (
    <section id="fruits" className="py-24 px-6 bg-accent/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">
            Our Selection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Fruits</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked from the finest orchards, our fruits are fresh, organic, and bursting with natural flavor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fruits.map((fruit) => (
            <Card
              key={fruit.name}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="relative aspect-square mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 rounded-full scale-75 group-hover:scale-90 transition-transform duration-500" />
                  <img
                    src={fruit.image || "/placeholder.svg"}
                    alt={fruit.name}
                    className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{fruit.badge}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{fruit.name}</h3>
                    <span className="text-primary font-bold">{fruit.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{fruit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
