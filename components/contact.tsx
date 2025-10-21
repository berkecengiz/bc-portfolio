"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/data/portfolio-data"

export function Contact() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission delay
    setTimeout(() => {
      window.location.href = `mailto:${contactInfo.email}?subject=Portfolio Contact&body=From: ${email}`
      setIsSubmitting(false)
      setShowSuccess(true)
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    }, 500)
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-b-4 border-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 border-b-4 border-foreground pb-4 inline-block">
            CONTACT
          </h2>

          <div className="glass-light border-4 border-foreground p-8 md:p-12">
            <p className="text-xl md:text-2xl font-bold mb-8 text-balance">Let&apos;s build something together.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-mono font-bold mb-2">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border-4 border-foreground bg-background text-foreground font-mono focus:outline-none focus:ring-4 focus:ring-accent"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-6 text-lg font-black border-4 border-foreground bg-accent text-accent-foreground hover:bg-accent/90 hover:translate-x-1 hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
              </Button>
              
              {showSuccess && (
                <div className="mt-4 p-4 border-2 border-accent bg-accent/10 font-mono text-sm">
                  Opening your email client...
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t-2 border-foreground space-y-4">
              <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
                <div className="glass p-4 border-2 border-foreground">
                  <p className="font-bold mb-1">EMAIL</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-accent hover:underline break-all">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="glass p-4 border-2 border-foreground">
                  <p className="font-bold mb-1">PHONE</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-accent hover:underline">
                    (+90) 505 497 38 08
                  </a>
                </div>
                <div className="glass p-4 border-2 border-foreground">
                  <p className="font-bold mb-1">GITHUB</p>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    github.com/berkecengiz
                  </a>
                </div>
                <div className="glass p-4 border-2 border-foreground">
                  <p className="font-bold mb-1">LINKEDIN</p>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    linkedin.com/in/berke-cengiz
                  </a>
                </div>
              </div>
              <div className="glass p-4 border-2 border-foreground font-mono text-sm">
                <p className="font-bold mb-1">LOCATION</p>
                <p className="text-muted-foreground">{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
