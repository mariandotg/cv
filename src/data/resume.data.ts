import { GithubIcon } from '../components/icons/GithubIcon'
import { LinkedInIcon } from '../components/icons/LinkedInIcon'
import { XIcon } from '../components/icons/XIcon'
import type { Welcome } from '../models/resume.data.models'

const EN_DATA = {
  name: 'Mariano Guillaume',
  initials: 'MG',
  location: 'Buenos Aires, Argentina, GMT-3',
  locationLink: 'https://www.google.com.ar/maps/place/Buenos+Aires/',
  about:
    'Detail-oriented Full Stack Engineer dedicated to building high-quality products.',
  summary:
    'As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/84543990?s=400&u=3',
  personalWebsiteUrl: 'https://marianoguillaume.com',
  contact: {
    email: 'marianguillaume.m@gmail.com',
    // tel: '+123456789',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/mariandotg',
        icon: GithubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marianoguillaume/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/BartoszJarocki',
        icon: XIcon,
      },
    ],
  },
  //   education: [
  //     {
  //       school: 'Wrocław University of Technology',
  //       degree: "Bachelor's Degree in Economic Sciences",
  //       start: '2007',
  //       end: '2010',
  //     },
  //   ],
  work: [
    {
      company: 'Freelance',
      title: 'Full Stack Developer',
      start: '2021',
      end: '2024',
      description:
        'Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL',
    },
    {
      company: 'Upward Solutions',
      title: 'Full Stack Developer',
      start: '2022',
      end: '2024',
      description:
        'Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL',
    },
    {
      company: 'Stefanini',
      title: 'SemiSenior Full Stack Developer',
      start: '2024',
      end: null,
      description:
        'Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL',
    },
  ],
  skills: [
    'TypeScript',
    'React/Next.js',
    'Node.js',
    'Nest.js',
    'Java',
    'SpringBoot',
  ],
  projects: [
    {
      title: 'marianoguillaume.com',
      techStack: ['TypeScript', 'Next.js', 'MDX'],
      description:
        'The Agile meeting co-pilot that delivers better meetings with less effort',
      link: {
        label: 'marianoguillaume.com',
        href: 'https://marianoguillaume.com/',
      },
    },
  ],
} as const

const ES_DATA = {
  name: 'Mariano Guillaume',
  initials: 'MG',
  location: 'Buenos Aires, Argentina, GMT-3',
  locationLink: 'https://www.google.com.ar/maps/place/Buenos+Aires/',
  about:
    'Ingeniero Full Stack orientado a los detalles y dedicado a crear productos de alta calidad.',
  summary:
    'Como ingeniero Full Stack, me especializo en llevar productos desde el concepto hasta el lanzamiento. Me destaco en liderar equipos y crear entornos donde las personas se desempeñan al máximo. Actualmente trabajo principalmente con TypeScript, React, Node.js y GraphQL. Tengo más de 8 años de experiencia trabajando remotamente con empresas a nivel mundial.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/84543990?s=400&u=3',
  personalWebsiteUrl: 'https://marianoguillaume.com/es',
  contact: {
    email: 'marianguillaume.m@gmail.com',
    // tel: '+123456789',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/mariandotg',
        icon: GithubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marianoguillaume/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/BartoszJarocki',
        icon: XIcon,
      },
    ],
  },
  //   education: [
  //     {
  //       school: 'Wrocław University of Technology',
  //       degree: "Bachelor's Degree in Economic Sciences",
  //       start: '2007',
  //       end: '2010',
  //     },
  //   ],
  work: [
    {
      company: 'Freelance',
      title: 'Desarrollador Full Stack',
      start: '2021',
      end: '2024',
      description:
        'Implementé nuevas funciones, lideré un equipo, mejoré el proceso de entrega de código e inicié la migración de Emotion a Tailwind CSS. Tecnologías: React, TypeScript, GraphQL',
    },
    {
      company: 'Upward Solutions',
      title: 'Desarrollador Full Stack',
      start: '2022',
      end: '2024',
      description:
        'Implementé nuevas funciones, lideré un equipo, mejoré el proceso de entrega de código e inicié la migración de Emotion a Tailwind CSS. Tecnologías: React, TypeScript, GraphQL',
    },
    {
      company: 'Stefanini',
      title: 'Desarrollador Full Stack SemiSenior',
      start: '2024',
      end: null,
      description:
        'Implementé nuevas funciones, lideré un equipo, mejoré el proceso de entrega de código e inicié la migración de Emotion a Tailwind CSS. Tecnologías: React, TypeScript, GraphQL',
    },
  ],
  skills: [
    'TypeScript',
    'React/Next.js',
    'Node.js',
    'Nest.js',
    'Java',
    'SpringBoot',
  ],
  projects: [
    {
      title: 'marianoguillaume.com',
      techStack: ['TypeScript', 'Next.js', 'MDX'],
      description:
        'El copiloto de reuniones ágil que ofrece mejores reuniones con menos esfuerzo',
      link: {
        label: 'marianoguillaume.com',
        href: 'https://marianoguillaume.com/es',
      },
    },
  ],
} as const

const RESUME_DATA = {
  en: EN_DATA,
  es: ES_DATA,
} as unknown as {
  [index: string]: Welcome
}

export { RESUME_DATA }
