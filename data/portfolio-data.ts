import type { Project, Experience, Education, Skill, ContactInfo, SocialLink } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "MULTI-TENANT CMS",
    category: "BACKEND / PLATFORM",
    description:
      "Architected a multi-tenant headless CMS integrating Keycloak SSO, Payload CMS, and PostgreSQL. Enabled hospitals and NGOs to manage isolated tenant data with RBAC, audit logging, and automated deployments.",
    tech: ["Node.js", "PostgreSQL", "Keycloak", "Docker", "GitHub Actions"],
    year: "2025",
    company: "LÖSEV",
  },
  {
    id: 2,
    title: "CI/CD PIPELINE AUTOMATION",
    category: "DEVOPS",
    description:
      "Developed multi-stage CI/CD pipelines using Jenkins and GitHub Actions with automated testing, container scanning, and rollback workflows. Reduced deployment time by 60% across multiple environments.",
    tech: ["Jenkins", "GitHub Actions", "Docker", "ArgoCD"],
    year: "2024",
    company: "IBM",
  },
  {
    id: 3,
    title: "MICROSERVICES FOR BI PLATFORM",
    category: "BACKEND / CLOUD",
    description:
      "Built microservices architecture processing 1M+ daily requests for enterprise BI workloads. Integrated gRPC APIs, service discovery, and distributed tracing with Kubernetes and Istio on IBM Cloud.",
    tech: ["Go", "Kubernetes", "Istio", "gRPC", "IBM Cloud"],
    year: "2024",
    company: "IBM",
  },
  {
    id: 4,
    title: "SECURITY AUTOMATION TOOLKIT",
    category: "DEVSECOPS",
    description:
      "Created an automated security and compliance toolkit for CI/CD pipelines. Combined SonarQube, Trivy, and dependency scanning to detect and resolve vulnerabilities before production deployments.",
    tech: ["Python", "SonarQube", "Trivy", "Docker"],
    year: "2024",
    company: "IBM",
  },
  {
    id: 5,
    title: "MULTI-CLOUD INFRASTRUCTURE AUTOMATION",
    category: "BACKEND / CLOUD",
    description:
      "Implemented Infrastructure-as-Code modules to manage workloads across AWS, Azure, and GCP. Automated provisioning, networking, and policy enforcement using Terraform and Python.",
    tech: ["Python", "Node.js", "Terraform", "AWS", "Azure", "GCP"],
    year: "2023",
    company: "Kyndryl",
  },
  {
    id: 6,
    title: "MONITORING & OBSERVABILITY PLATFORM",
    category: "DEVOPS / PLATFORM",
    description:
      "Delivered a centralized observability stack with Grafana, Prometheus, and ELK. Built dashboards, alerting rules, and log aggregation pipelines improving visibility and incident response.",
    tech: ["Grafana", "Prometheus", "ELK Stack", "Node.js", "React.js"],
    year: "2023",
    company: "Kyndryl",
  },
];


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

