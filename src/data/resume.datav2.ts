import { GithubIcon } from '../components/icons/GithubIcon'
import { LinkedInIcon } from '../components/icons/LinkedInIcon'
import { XIcon } from '../components/icons/XIcon'
import { InstagramIcon } from '../components/icons/InstagramIcon'
import type { Welcome } from '../models/resume.data.models'

// Curated version: 2–4 bullets per role, prioritizing metrics and ownership.

const EN_DATA = {
  name: 'Mariano Guillaume',
  initials: 'MG',
  location: 'Buenos Aires, Argentina, GMT-3',
  locationLink: 'https://www.google.com.ar/maps/place/Buenos+Aires/',
  about:
    'Backend Engineer & Tech Lead specializing in Java and distributed systems, with 4+ years delivering fintech solutions across enterprise clients.',
  summary:
    'Backend engineer turned Tech Lead with 4+ years of remote experience building and scaling fintech systems. I have designed microservices for platforms serving 40,000+ companies, led cross-functional teams through major technical migrations, and driven architectural decisions across multiple enterprise client accounts. Currently leading development teams at Stefanini while also conducting technical assessments for engineering hiring. Based in Buenos Aires, Argentina with upper-intermediate English (B2).',
  avatarUrl: 'me.webp',
  personalWebsiteUrl: 'https://marianoguillaume.com',
  resumeUrl: 'mariano-guillaume-cv-en.pdf',
  contact: {
    email: 'contacto@marianoguillaume.com',
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
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/marian_guilla',
        icon: InstagramIcon,
      },
    ],
  },
  work: [
    {
      company: 'Upward Solutions',
      title: 'Backend Developer',
      start: '2022',
      end: '2024',
      description: '',
      techStack: ['Node.js', 'Express.js', 'Kotlin', 'PostgreSQL', 'MySQL', 'Python', 'Selenium'],
      bullets: [
        'Engineered Node.js and Express.js microservices as sole backend developer on a 3-person team, for a white-label tax liquidation SaaS sold to accounting firms across Argentina, with AFIP regulatory integrations.',
        'Built REST API endpoints in Kotlin with Javalin for a second service in the platform, delivering features to ~700 weekly active users.',
        'Achieved 80% unit test coverage on the tax liquidation backend, enabling safer production deployments and faster refactoring.',
        'Built a Python and Selenium scraping bot that automated fiscal data extraction, eliminating periodic manual downloads and reducing team overhead.',
      ],
    },
    {
      company: 'Stefanini',
      logo: '/logos/stefanini.png',
      title: 'SemiSenior Full Stack Developer',
      start: '2024',
      end: '2025',
      description:
        'Worked as a full stack consultant across multiple clients, delivering backend and frontend solutions in production environments.',
      clients: [
        {
          name: 'RCI (Renault Credit International)',
          logo: '/logos/rci.png',
          bullets: [
            'Owned end-to-end delivery of Hub Digital (~200 users), an internal document management platform for expense reports, insurance requests, and vendor invoices—including production deployments and ongoing technical support.',
            'Delivered a commission tracking module enabling the business to automate commission calculations for the first time, processing FTP-uploaded CSV files via a scheduled batch job.',
            'Led the incremental AngularJS-to-Angular 17 migration across 3 microfrontends with zero service interruption, eliminating a critical legacy dependency.',
            'Integrated Google Cloud Storage and Document AI to automate invoice data extraction, replacing fully manual data entry for the document management workflow.',
          ],
          techStack: ['Java', 'Spring Boot', 'Angular 17', 'AngularJS', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage'],
        },
        {
          name: 'Interbanking',
          logo: '/logos/interbanking.ico',
          bullets: [
            'Engineered 2 of 5 Quarkus microservices in the decomposition of Interbanking\'s Java 8 monolith, replacing legacy infrastructure for the VEP payment platform serving 40k+ companies paying AFIP tax obligations.',
            'Built a payment service with idempotency and distributed locking, eliminating race conditions under high concurrent load.',
          ],
          techStack: ['Java 17', 'Quarkus', 'Microservices', 'Node.js', 'Nest.js', 'Oracle Database', 'MongoDB', 'Kafka'],
        },
      ],
    },
    {
      company: 'Stefanini',
      logo: '/logos/stefanini.png',
      title: 'Tech Lead',
      start: '2025',
      end: null,
      description:
        'Leading development teams across multiple client accounts, driving technical decisions, conducting code reviews, and supporting HR in engineering recruitment.',
      clients: [
        {
          name: 'RCI (Renault Credit International)',
          logo: '/logos/rci.png',
          bullets: [
            'Leading a cross-functional team of 2 developers and 1 QA engineer, authoring functional specs and technical documents to reduce ambiguity and maintain delivery pace.',
            'Leading the design of a proprietary LLM + template-based OCR system for invoice text extraction, targeting an 80% reduction in cloud infrastructure costs.',
            'Delivered the full migration of the invoice approval flow to the mobile app as the first production MVP, enabling end-to-end document approval on iOS and Android.',
            'Leading the ARCA/AFIP regulatory integration into the invoice approval flow across both the Hub Digital web and mobile platforms.',
          ],
          techStack: ['Java', 'Spring Boot', 'Angular 17', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage', 'RabbitMQ'],
        },
        {
          name: 'Banco Macro',
          logo: '/logos/banco-macro.png',
          bullets: [
            'Serve as development module lead for Sainapse at Banco Macro, acting as primary technical contact for client engineers adopting an AI-powered platform that uses LLMs for automated code analysis.',
            'Coordinate across a PM, QA lead, and 2 DevOps engineers to scope and ship product upgrades (including bug fixes and new features) aligned with Banco Macro\'s enterprise requirements.',
            'Designed and implemented a cloud abstraction layer across 5 microservices, enabling deployment on either AWS (DynamoDB, S3, Bedrock, Secrets Manager) or GCP (Cloud Storage, Firestore, Vertex AI, Secret Manager) without code changes.',
            'Built a provider-agnostic git integration layer across 2 microservices, enabling Sainapse\'s repository analysis to run on both GitHub and GitLab without code changes.',
          ],
          techStack: ['Python', 'FastAPI', 'Microservices', 'AWS', 'GCP', 'Generative AI', 'Machine Learning'],
        },
        {
          name: 'Ford',
          logo: '/logos/ford.ico',
          bullets: [
            'Conduct technical interviews and assess mid-to-senior engineering candidates for Ford-related engineering positions.',
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: 'Universidad Abierta Interamericana (UAI)',
      degree: 'Systems Engineering',
      start: '2025',
      end: null,
    },
  ],
  skills: [
    'Java',
    'Spring Boot',
    'Quarkus',
    'GCP',
    'AWS',
    'TypeScript',
    'Node.js',
    'Angular',
    'Microservices',
    'Kafka',
    'SQL',
    'PostgreSQL',
    'MongoDB',
    'Python',
    'Docker',
    'REST APIs',
  ],
  projects: [],
  certificates: [
    { title: 'React Development', issuer: 'Alkemy', date: '2022', url: '/certificates/certificado-alkemy-react.pdf' },
    { title: 'Full Stack Java', issuer: 'Codo a Codo', date: '2023', url: '/certificates/certificado-codo-a-codo-fullstack-java.pdf' },
    { title: 'Spring Boot Specialization', issuer: 'Codo a Codo', date: '2024', url: '/certificates/certificado-especializacion-spring.pdf' },
  ],
} as const

const ES_DATA = {
  name: 'Mariano Guillaume',
  initials: 'MG',
  location: 'Buenos Aires, Argentina, GMT-3',
  locationLink: 'https://www.google.com.ar/maps/place/Buenos+Aires/',
  about:
    'Ingeniero Backend y Tech Lead especializado en Java y sistemas distribuidos, con más de 4 años entregando soluciones fintech en clientes enterprise.',
  summary:
    'Ingeniero backend convertido en Tech Lead con más de 4 años de experiencia remota construyendo y escalando sistemas fintech. Diseñé microservicios para plataformas con más de 40.000 empresas, lideré equipos en migraciones técnicas complejas y tomé decisiones de arquitectura en múltiples cuentas de clientes enterprise. Actualmente lidero equipos de desarrollo en Stefanini y realizo evaluaciones técnicas para procesos de selección de ingeniería. Vivo en Buenos Aires, Argentina y tengo inglés intermedio-alto (B2).',
  avatarUrl: 'me.webp',
  personalWebsiteUrl: 'https://marianoguillaume.com/es',
  resumeUrl: 'mariano-guillaume-cv-es.pdf',
  contact: {
    email: 'contacto@marianoguillaume.com',
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
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/marian_guilla',
        icon: InstagramIcon,
      },
    ],
  },
  work: [
    {
      company: 'Upward Solutions',
      title: 'Desarrollador Backend',
      start: '2022',
      end: '2024',
      description: '',
      techStack: ['Node.js', 'Express.js', 'Kotlin', 'PostgreSQL', 'MySQL', 'Python', 'Selenium'],
      bullets: [
        'Desarrollé microservicios con Node.js y Express.js como único desarrollador backend en un equipo de 3 personas, para una SaaS de liquidación impositiva white-label vendida a estudios contables en Argentina, con integraciones regulatorias de AFIP.',
        'Desarrollé endpoints en Kotlin con Javalin para un segundo servicio de la plataforma, con ~700 usuarios activos semanales.',
        'Alcancé un 80% de cobertura de tests unitarios en el backend de liquidación impositiva, permitiendo deploys más seguros y refactorizaciones más ágiles.',
        'Construí un bot de scraping con Python y Selenium que automatizó la extracción de datos fiscales, eliminando descargas manuales periódicas del equipo.',
      ],
    },
    {
      company: 'Stefanini',
      logo: '/logos/stefanini.png',
      title: 'Desarrollador Full Stack SemiSenior',
      start: '2024',
      end: '2025',
      description:
        'Trabajé como consultor full stack para múltiples clientes, entregando soluciones backend y frontend en entornos productivos.',
      clients: [
        {
          name: 'RCI (Renault Credit International)',
          logo: '/logos/rci.png',
          bullets: [
            'Tuve ownership completo de Hub Digital (~200 usuarios), plataforma interna de gestión documental para rendiciones de gastos, seguros y facturas de proveedores, incluyendo deploys en producción y soporte técnico continuo.',
            'Entregué un módulo de seguimiento de comisiones que automatizó este proceso por primera vez, procesando archivos CSV subidos por FTP mediante un job programado.',
            'Lideré la migración incremental de AngularJS a Angular 17 en 3 microfrontends sin interrupciones de servicio, eliminando una dependencia legacy crítica.',
            'Integré Google Cloud Storage y Document AI para automatizar la extracción de datos de facturas, reemplazando la carga manual de datos en el flujo de gestión documental.',
          ],
          techStack: ['Java', 'Spring Boot', 'Angular 17', 'AngularJS', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage'],
        },
        {
          name: 'Interbanking',
          logo: '/logos/interbanking.ico',
          bullets: [
            'Desarrollé 2 de los 5 microservicios en Quarkus para la descomposición del monolito Java 8 de Interbanking, reemplazando infraestructura legacy en la plataforma de pago de VEPs utilizada por más de 40k empresas.',
            'Construí un servicio de pago con idempotencia y lock distribuido, eliminando race conditions bajo alta carga concurrente.',
          ],
          techStack: ['Java 17', 'Quarkus', 'Microservicios', 'Node.js', 'Nest.js', 'Oracle Database', 'MongoDB', 'Kafka'],
        },
      ],
    },
    {
      company: 'Stefanini',
      logo: '/logos/stefanini.png',
      title: 'Tech Lead',
      start: '2025',
      end: null,
      description:
        'Liderando equipos de desarrollo para múltiples clientes, tomando decisiones técnicas, realizando code reviews y apoyando a RRHH en procesos de selección técnica.',
      clients: [
        {
          name: 'RCI (Renault Credit International)',
          logo: '/logos/rci.png',
          bullets: [
            'Lidero un equipo cross-funcional de 2 desarrolladores y 1 QA, redactando especificaciones funcionales y documentos técnicos para reducir la ambigüedad y sostener la cadencia de entrega.',
            'Lidero el diseño de un sistema OCR propio basado en LLMs y templates para extracción de texto de facturas, con una reducción proyectada de hasta el 80% en costos de infraestructura en la nube.',
            'Entregué la migración completa del flujo de aprobación de facturas a la app móvil como primer MVP productivo, habilitando la aprobación end-to-end en iOS y Android.',
            'Lidero la integración regulatoria con ARCA/AFIP en el flujo de pago a proveedores, tanto en la versión web como móvil de Hub Digital.',
          ],
          techStack: ['Java', 'Spring Boot', 'Angular 17', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage', 'RabbitMQ'],
        },
        {
          name: 'Banco Macro',
          logo: '/logos/banco-macro.png',
          bullets: [
            'Lidero el módulo de desarrollo de Sainapse en Banco Macro, siendo el referente técnico principal para los ingenieros del cliente que adoptan una plataforma potenciada por IA para análisis automático de código.',
            'Coordino un equipo compuesto por un PM, un líder de QA y 2 DevOps para definir y entregar mejoras al producto (incluyendo correcciones de bugs y nuevas funcionalidades) alineadas con los requerimientos enterprise de Banco Macro.',
            'Diseñé e implementé una capa de abstracción de cloud en 5 microservicios, habilitando el despliegue tanto en AWS (DynamoDB, S3, Bedrock, Secrets Manager) como en GCP (Cloud Storage, Firestore, Vertex AI, Secret Manager) sin cambios en el código.',
            'Construí una capa de integración git agnóstica al proveedor en 2 microservicios, habilitando el análisis de repositorios de Sainapse tanto en GitHub como en GitLab sin cambios en el código.',
          ],
          techStack: ['Python', 'FastAPI', 'Microservicios', 'AWS', 'GCP', 'IA Generativa', 'Machine Learning'],
        },
        {
          name: 'Ford',
          logo: '/logos/ford.ico',
          bullets: [
            'Realizo entrevistas técnicas y evalúo candidatos de nivel semi-senior y senior para posiciones de ingeniería vinculadas al cliente Ford.',
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: 'Universidad Abierta Interamericana (UAI)',
      degree: 'Ingeniería en Sistemas',
      start: '2025',
      end: null,
    },
  ],
  skills: [
    'Java',
    'Spring Boot',
    'Quarkus',
    'GCP',
    'AWS',
    'TypeScript',
    'Node.js',
    'Angular',
    'Microservices',
    'Kafka',
    'SQL',
    'PostgreSQL',
    'MongoDB',
    'Python',
    'Docker',
    'REST APIs',
  ],
  projects: [],
  certificates: [
    { title: 'React Development', issuer: 'Alkemy', date: '2022', url: '/certificates/certificado-alkemy-react.pdf' },
    { title: 'Full Stack Java', issuer: 'Codo a Codo', date: '2023', url: '/certificates/certificado-codo-a-codo-fullstack-java.pdf' },
    { title: 'Spring Boot Specialization', issuer: 'Codo a Codo', date: '2024', url: '/certificates/certificado-especializacion-spring.pdf' },
  ],
} as const

const RESUME_DATA = {
  en: EN_DATA,
  es: ES_DATA,
} as unknown as {
  [index: string]: Welcome
}

export { RESUME_DATA }
