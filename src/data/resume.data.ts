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
    'Backend Developer committed to creating efficient and scalable solutions.',
  summary:
    'As a Backend Developer, I specialize in building robust and scalable systems from concept to implementation. I excel in optimizing backend performance and ensuring seamless integration with front-end services. Currently, I work mostly with Java, Spring Boot, and MySQL, but I did work a lot with Node.js . I have over 3 years of experience working remotely with companies worldwide.',
  avatarUrl: 'me.webp',
  personalWebsiteUrl: 'https://marianoguillaume.com',
  resumeUrl: 'MarianoGuillaumeCV-en.pdf',
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
        url: 'https://twitter.com/mariandotg',
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
    {
      title: 'marianoguillaumeasdas.com',
      techStack: ['TypeScript', 'Next.js', 'MDX'],
      description:
        'El copiloto de reuniones ágil que ofrece mejores reuniones con menos esfuerzo',
      link: {
        label: 'marianoguillaume.com',
        href: 'https://marianoguillaume.com/es',
      },
    },
    {
      title: 'marianoguillaumeasdas.com',
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

const ES_DATA = {
  name: 'Mariano Guillaume',
  initials: 'MG',
  location: 'Buenos Aires, Argentina, GMT-3',
  locationLink: 'https://www.google.com.ar/maps/place/Buenos+Aires/',
  about:
    'Desarrollador Backend comprometido con la creación de soluciones eficientes y escalables.',
  summary:
    'Como desarrollador backend, me especializo en crear sistemas robustos y escalables desde el concepto hasta la implementación. Me destaco en la optimización del rendimiento del backend y en garantizar una integración perfecta con los servicios de front-end. Actualmente, trabajo principalmente con Java, Spring Boot y MySQL, pero trabajé mucho con Node.js. Tengo más de 3 años de experiencia trabajando de forma remota con empresas de todo el mundo.',
  avatarUrl: 'me.webp',
  personalWebsiteUrl: 'https://marianoguillaume.com/es',
  resumeUrl: 'MarianoGuillaumeCV-es.pdf',
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
        url: 'https://x.com/mariandotg',
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
    {
      title: 'marianoguillaumeasdas.com',
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
