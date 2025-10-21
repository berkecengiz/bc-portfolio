import { projects } from "@/data/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-b-4 border-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-16 border-b-4 border-foreground pb-4 inline-block">
          PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group">
                <div className="project-card glass border-4 border-foreground p-6 h-full transition-colors duration-200 ease-out group-hover:border-accent">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-accent text-accent-foreground border-2 border-foreground">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                </div>

                <h3 className="text-2xl font-black mb-3 leading-tight text-balance">{project.title}</h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 border border-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
