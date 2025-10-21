import { experiences, education, skills } from "@/data/portfolio-data"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b-4 border-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-1 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 border-b-4 border-foreground pb-4 inline-block">
              ABOUT
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Backend Developer with 4+ years of experience building microservices and cloud-native applications
                across AWS, Azure, and GCP. Proven track record of developing high-performance APIs, implementing CI/CD
                pipelines, and optimizing system architectures that serve thousands of users.
              </p>
              <p className="text-muted-foreground">
                Expert in Node.js, Python, and Go with strong DevOps capabilities. Passionate about clean code,
                automation, and delivering robust backend solutions for complex business requirements.
              </p>
              <p className="text-muted-foreground">
                Currently working as a Backend Engineer at LOSEV, architecting multi-tenant headless CMS solutions and
                automating operational workflows. Previously contributed to IBM&#39;s BI application cloud ecosystem and
                Kyndryl&#39;s multi-cloud automation platforms.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-black border-b-2 border-foreground pb-2 inline-block">CORE SKILLS</h3>
              <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                {skills.map((skill) => (
                  <div key={skill.category} className="glass p-4 border-2 border-foreground">
                    <p className="font-bold mb-2">{skill.category}</p>
                    <p className="text-muted-foreground">{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black border-b-2 border-foreground pb-2 inline-block">EXPERIENCE</h3>
                <div className="space-y-4 font-mono text-sm">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className={`glass p-4 border-2 border-foreground ${
                        exp.isCurrent ? "border-l-8 border-l-accent" : ""
                      }`}
                    >
                      <p className="font-bold">
                        {exp.title} @ {exp.company}
                      </p>
                      <p className="text-muted-foreground">
                        {exp.period} | {exp.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black border-b-2 border-foreground pb-2 inline-block mb-4">EDUCATION</h3>
                <div className="glass p-4 border-2 border-foreground font-mono text-sm">
                  <p className="font-bold">{education.degree}</p>
                  <p className="text-muted-foreground">{education.institution}</p>
                  <p className="text-muted-foreground">{education.period}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo section removed */}
        </div>
      </div>
    </section>
  )
}
