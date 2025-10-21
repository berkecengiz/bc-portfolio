import type { Project, Experience, Education, Skill, ContactInfo, SocialLink } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "MULTI-TENANT HEADLESS CMS",
    category: "BACKEND",
    description:
      "Architected and deployed scalable multi-tenant headless CMS platform with role-based access control, serving multiple organizations with isolated data management.",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    year: "2025",
  },
  {
    id: 2,
    title: "CI/CD PIPELINE AUTOMATION",
    category: "DEVOPS",
    description:
      "Built end-to-end CI/CD pipelines using GitLab CI and GitHub Actions, reducing deployment time by 60% with automated testing, security scanning, and rollback mechanisms.",
    tech: ["GitLab CI", "GitHub Actions", "Docker", "Kubernetes"],
    year: "2024",
  },
  {
    id: 3,
    title: "CLOUD INFRASTRUCTURE AUTOMATION",
    category: "CLOUD",
    description:
      "Developed Infrastructure-as-Code solutions for multi-cloud deployments across AWS, Azure, and GCP, managing 100+ cloud resources with Terraform and Ansible.",
    tech: ["Terraform", "Ansible", "AWS", "Azure", "GCP"],
    year: "2024",
  },
  {
    id: 4,
    title: "MICROSERVICES ARCHITECTURE",
    category: "BACKEND",
    description:
      "Designed and implemented microservices architecture handling 1M+ daily requests with service mesh, API gateway, and distributed tracing for enterprise BI platform.",
    tech: ["Go", "Kubernetes", "Istio", "gRPC"],
    year: "2024",
  },
  {
    id: 5,
    title: "MONITORING & OBSERVABILITY PLATFORM",
    category: "DEVSECOPS",
    description:
      "Implemented comprehensive monitoring and observability stack with custom dashboards, alerting rules, and log aggregation for production systems.",
    tech: ["Prometheus", "Grafana", "ELK Stack", "Python"],
    year: "2023",
  },
  {
    id: 6,
    title: "SECURITY AUTOMATION TOOLKIT",
    category: "DEVSECOPS",
    description:
      "Created automated security scanning and compliance toolkit integrated into CI/CD pipelines, reducing security vulnerabilities by 70% through proactive detection.",
    tech: ["Python", "OWASP ZAP", "SonarQube", "Trivy"],
    year: "2023",
  },
]

export const experiences: Experience[] = [
  {
    title: "Backend Engineer",
    company: "LOSEV",
    period: "July 2025 – Present",
    location: "Ankara, Türkiye",
    isCurrent: true,
  },
  {
    title: "Software/DevOps Engineer",
    company: "IBM",
    period: "May 2024 – June 2025",
    location: "Krakow, Poland",
  },
  {
    title: "Software Engineer",
    company: "Kyndryl",
    period: "April 2022 – May 2024",
    location: "Wroclaw, Poland",
  },
]

export const education: Education = {
  degree: "Bachelor of Engineering, Computer Science",
  institution: "Wroclaw University of Science and Technology",
  period: "October 2019 – March 2023",
}

export const skills: Skill[] = [
  {
    category: "Languages",
    items: "Python, TypeScript, Go, Java, Bash",
  },
  {
    category: "Frameworks",
    items: "Node.js, FastAPI, Express.js, Next.js, React.js",
  },
  {
    category: "Cloud & DevOps",
    items: "AWS, Azure, GCP, Kubernetes, Docker, Helm",
  },
  {
    category: "Databases",
    items: "PostgreSQL, MongoDB, Redis",
  },
]

export const contactInfo: ContactInfo = {
  email: "berkecengiz94@gmail.com",
  github: "https://github.com/berkecengiz",
  linkedin: "https://www.linkedin.com/in/berke-cengiz",
  location: "Ankara, Türkiye",
}

export const socialLinks: SocialLink[] = [
  { name: "GITHUB", href: "https://github.com/berkecengiz" },
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/berke-cengiz" },
]

