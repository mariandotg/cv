export interface Certificate {
  title: string
  issuer: string
  date: string
  url: string
}

export interface Education {
  institution: string
  degree: string
  start: string
  end: string | null
}

export interface Welcome {
  name: string
  initials: string
  location: string
  locationLink: string
  about: string
  summary: string
  avatarUrl: string
  personalWebsiteUrl: string
  resumeUrl: string
  contact: Contact
  work: Work[]
  education: Education[]
  skills: string[]
  projects: Project[]
  certificates: Certificate[]
}

export interface Contact {
  email: string
  social: Social[]
}

export interface Social {
  name: string
  url: string
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

export interface Project {
  title: string
  techStack: string[]
  description: string
  link: Link
}

export interface Link {
  label: string
  href: string
}

export interface WorkClient {
  name: string
  logo?: string
  bullets: readonly string[]
  techStack?: readonly string[]
}

export interface Work {
  company: string
  logo?: string
  title: string
  start: string
  end: null | string
  description: string
  bullets?: readonly string[]
  techStack?: readonly string[]
  clients?: readonly WorkClient[]
}
