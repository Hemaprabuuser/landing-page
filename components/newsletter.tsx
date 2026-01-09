"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail("")
  }

  return (
    <section id="contact" className="py-24 px-6 bg-accent/50">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Stay Fresh & Updated</h2>
          <p className="text-muted-foreground text-lg">
            Subscribe to our newsletter for exclusive deals, seasonal picks, and fresh tips delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-background border-border"
          />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Subscribe
            <Send className="w-4 h-4" />
          </Button>
        </form>

        <p className="text-sm text-muted-foreground">Join 10,000+ fruit lovers. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
