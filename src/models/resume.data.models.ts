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
  skills: string[]
  projects: Project[]
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

export interface Work {
  company: string
  title: string
  start: string
  end: null | string
  description: string
}
