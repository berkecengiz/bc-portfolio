export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative border-b-4 border-foreground"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 grid grid-cols-12 gap-0" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-border/20" />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <header className="glass-light p-8 md:p-12 border-4 border-foreground">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 text-balance">
              BERKE
              <br />
              <span className="text-accent">CENGIZ</span>
            </h1>
            <p className="text-lg md:text-xl font-mono text-muted-foreground max-w-2xl">
              Backend Developer | DevOps & DevSecOps | Cloud Platforms
            </p>
          </header>
        </div>
      </div>
    </section>
  )
}
