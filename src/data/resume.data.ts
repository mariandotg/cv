import { GithubIcon } from '../components/icons/GithubIcon'
import { LinkedInIcon } from '../components/icons/LinkedInIcon'
import { XIcon } from '../components/icons/XIcon'

export const RESUME_DATA = {
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
