export interface Project {
  id: number
  title: string
  category: string
  description: string
  tech: string[]
  year: string
}

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  isCurrent?: boolean
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface Skill {
  category: string
  items: string
}

export interface ContactInfo {
  email: string
  phone: string
  github: string
  linkedin: string
  location: string
}

export interface SocialLink {
  name: string
  href: string
}

