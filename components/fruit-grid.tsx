"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Filter } from "lucide-react"

const allFruits = [
  {
    name: "Nectarine",
    description: "Sweet and juicy with a smooth skin, perfect for summer snacking.",
    image: "/images/vecteezy-delicious-and-juicy-exploring-the-world-of-nectarine-fruit-47421166.jpeg",
    badge: "Popular",
    price: 4.99,
    category: "Stone Fruits",
  },
  {
    name: "Orange",
    description: "Bursting with vitamin C and natural sweetness.",
    image: "/images/vecteezy-fresh-and-sweet-orange-fruit-35912565.png",
    badge: "Fresh",
    price: 3.49,
    category: "Citrus",
  },
  {
    name: "Kiwi",
    description: "Exotic and tangy, packed with nutrients and fiber.",
    image: "/images/vecteezy-kiwi-isolated-on-transparent-background-47410681.jpeg",
    badge: "Organic",
    price: 5.99,
    category: "Tropical",
  },
  {
    name: "Strawberry",
    description: "Red, ripe, and irresistibly sweet. A classic favorite.",
    image: "/images/vecteezy-ai-generated-fresh-single-strawberry-40350835.jpeg",
    badge: "Seasonal",
    price: 6.99,
    category: "Berries",
  },
  {
    name: "Mango",
    description: "The king of fruits with a creamy, tropical flavor.",
    image: "/fresh-ripe-mango-fruit-isolated.jpg",
    badge: "Tropical",
    price: 5.49,
    category: "Tropical",
  },
  {
    name: "Blueberries",
    description: "Tiny powerhouses of antioxidants and sweet flavor.",
    image: "/fresh-blueberries-pile-isolated.jpg",
    badge: "Superfood",
    price: 7.99,
    category: "Berries",
  },
  {
    name: "Watermelon",
    description: "Refreshing summer treat, perfect for hot days.",
    image: "/fresh-watermelon-slice-isolated.jpg",
    badge: "Summer",
    price: 8.99,
    category: "Melons",
  },
  {
    name: "Grapes",
    description: "Sweet clusters of goodness, great for snacking.",
    image: "/fresh-purple-grapes-bunch-isolated.jpg",
    badge: "Classic",
    price: 4.49,
    category: "Berries",
  },
  {
    name: "Pineapple",
    description: "Tropical sweetness with a tangy twist.",
    image: "/fresh-pineapple-fruit-isolated.jpg",
    badge: "Tropical",
    price: 6.49,
    category: "Tropical",
  },
  {
    name: "Lemon",
    description: "Bright, zesty flavor for cooking and beverages.",
    image: "/fresh-lemon-fruit-isolated.jpg",
    badge: "Essential",
    price: 2.99,
    category: "Citrus",
  },
  {
    name: "Peach",
    description: "Soft, fuzzy, and incredibly sweet stone fruit.",
    image: "/fresh-peach-fruit-isolated.jpg",
    badge: "Seasonal",
    price: 4.79,
    category: "Stone Fruits",
  },
  {
    name: "Raspberry",
    description: "Delicate berries with a perfect sweet-tart balance.",
    image: "/fresh-raspberries-pile-isolated.jpg",
    badge: "Premium",
    price: 8.49,
    category: "Berries",
  },
]

const categories = ["All", "Berries", "Citrus", "Tropical", "Stone Fruits", "Melons"]

export function FruitGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFruits =
    selectedCategory === "All" ? allFruits : allFruits.filter((fruit) => fruit.category === selectedCategory)

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-accent bg-transparent"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Fruit grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFruits.map((fruit) => (
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
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{fruit.name}</h3>
                    <span className="text-primary font-bold">${fruit.price.toFixed(2)}/lb</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{fruit.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {fruit.category}
                  </Badge>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-muted-foreground mt-12">
          Showing {filteredFruits.length} of {allFruits.length} fruits
        </p>
      </div>
    </section>
  )
}
