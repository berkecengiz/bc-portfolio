import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen">
        <Navigation />
        <ThemeToggle />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ErrorBoundary>
  )
}
