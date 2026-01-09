import { CollectionHeader } from "@/components/collection-header"
import { FruitGrid } from "@/components/fruit-grid"
import { Footer } from "@/components/footer"

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-background">
      <CollectionHeader />
      <FruitGrid />
      <Footer />
    </main>
  )
}
