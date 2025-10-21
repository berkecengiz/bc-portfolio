"use client"

import { useState, useEffect, useCallback } from "react"

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let frameId: number | null = null

    const updateActiveSection = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2
      let closestSection = activeSection
      let minDistance = Number.POSITIVE_INFINITY

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id)
        if (!element) continue

        const { offsetTop, offsetHeight } = element
        const sectionCenter = offsetTop + offsetHeight / 2
        const distance = Math.abs(viewportCenter - sectionCenter)

        if (distance < minDistance) {
          minDistance = distance
          closestSection = item.id
        }
      }

      setActiveSection(closestSection)
      frameId = null
    }

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateActiveSection()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [activeSection])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setActiveSection(sectionId)
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = Math.max(elementPosition - headerOffset, 0)

      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [mobileMenuOpen])

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:border-2 focus:border-foreground"
      >
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-foreground bg-background/80 backdrop-blur-md" aria-label="Main navigation">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-black hover:text-accent transition-colors cursor-pointer"
          >
            BC
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 font-mono text-sm border-2 transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "border-accent bg-accent text-background"
                    : "border-foreground text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center border-2 border-foreground p-1 hover:bg-foreground/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-full h-0.5 bg-foreground transition-transform ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-foreground transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-foreground transition-transform ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t-4 border-foreground bg-background transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-3 font-mono text-sm border-2 transition-colors duration-200 text-left cursor-pointer ${
                activeSection === item.id
                  ? "border-accent bg-accent text-background"
                  : "border-foreground text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
    </>
  )
}
