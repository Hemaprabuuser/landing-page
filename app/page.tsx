import { Hero } from "@/components/hero"
import { FeaturedFruits } from "@/components/featured-fruits"
import { Benefits } from "@/components/benefits"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedFruits />
      <Benefits />
      <Newsletter />
      <Footer />
    </main>
  )
}
