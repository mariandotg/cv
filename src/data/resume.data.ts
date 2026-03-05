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
    'Backend Engineer & Tech Lead specializing in Java and distributed systems, with 3+ years delivering fintech solutions across enterprise clients.',
  summary:
    'Backend engineer turned Tech Lead with 3+ years of remote experience building and scaling fintech systems. I have designed microservices for platforms serving 40,000+ users, led cross-functional teams through major technical migrations, and driven architectural decisions across multiple enterprise client accounts. Currently leading development teams at Stefanini while also conducting technical assessments for engineering hiring. Based in Buenos Aires, Argentina with professional-level English (C2).',
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
  work: [
    {
      company: 'Upward Solutions',
      title: 'Full Stack Developer',
      start: '2022',
      end: '2024',
      description: '',
      bullets: [
        'Engineered Node.js and Express.js microservices as sole backend developer on a 3-person team, for an AFIP-integrated tax liquidation platform serving accountants across Argentina.',
        'Developed REST API controllers in Kotlin with Javalin, serving ~700 weekly users in production.',
        'Migrated SQL databases (PostgreSQL and MySQL) using Flyway, maintaining data integrity across production releases.',
        'Achieved 80% code coverage through comprehensive unit testing.',
        'Built a Python and Selenium scraping bot, automating fiscal data extraction from external sources.',
      ],
    },
    {
      company: 'Stefanini',
      title: 'SemiSenior Full Stack Developer',
      start: '2024',
      end: '2025', // TODO: confirm when title changed to Tech Lead
      description:
        'Worked as a full stack consultant across multiple clients, delivering backend and frontend solutions in production environments.',
      clients: [
        {
          name: 'RCI (Renault Credit International)',
          bullets: [
            'Managed full-cycle development, production deployments, and technical support for Hub Digital (~200 users), an internal document management platform for expense reports, insurance requests, and vendor invoices.',
            'Developed a role-based annual budget dashboard with department-level granularity and permission controls per user role.',
            'Developed a commission tracking module processing FTP-uploaded CSV files via a scheduled batch job.',
            'Led the complete AngularJS-to-Angular 17 migration across 3 microfrontends.',
            'Led the migration of the frontends to a cross-platform iOS and Android application using Ionic and Capacitor.',
            'Onboarded 3 QA engineers and 4 developers across multiple rotation cycles, maintaining consistent delivery pace.',
            'Implemented Google Cloud Storage for user file and document storage.',
          ],
          techStack: ['Java', 'Angular 17', 'AngularJS', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage'],
        },
        {
          name: 'Interbanking',
          bullets: [
            'Engineered 2 of 5 microservices in the Java 8 monolith decomposition for Interbanking\'s VEP payment platform, serving 40k+ companies and individuals paying AFIP tax obligations.',
            'Built a payment service with idempotency and distributed locking, eliminating race conditions under high concurrent load.',
            'Developed a VEP retrieval service enforcing AFIP-specific business rules, enabling accurate tax obligation lookup across all user accounts.',
            'Migrated the codebase from Java 8 to Java 17, ensuring long-term maintainability and access to modern language improvements.',
          ],
          techStack: ['Java 17', 'Quarkus', 'Microservices', 'Oracle Database', 'MongoDB', 'Kafka'],
        },
        {
          name: 'LatinPay',
          bullets: [
            'Diagnosed and resolved platform-specific bugs on a legacy .NET iOS and Android application.',
          ],
          techStack: ['.NET', 'iOS', 'Android'],
        },
      ],
    },
    {
      company: 'Stefanini',
      title: 'Tech Lead',
      start: '2025', // TODO: confirm exact start date
      end: null,
      description:
        'Leading development teams across multiple client accounts, driving technical decisions, conducting code reviews, and supporting HR in engineering recruitment.',
      clients: [
        {
          name: 'RCI (Renault Credit International)',
          bullets: [
            'TODO: add Tech Lead description for RCI.',
          ],
          techStack: ['Java', 'Angular 17', 'Ionic', 'Capacitor'],
        },
        {
          name: 'Banco Macro',
          bullets: [
            'TODO: add description.',
          ],
        },
        {
          name: 'Ford',
          bullets: [
            'Conduct technical interviews and assess engineering candidates for Ford-related engineering positions.',
          ],
        },
      ],
    },
  ],
  skills: [
    'Java',
    'Spring Boot',
    'Quarkus',
    'Kotlin',
    'TypeScript',
    'Node.js',
    'Angular',
    'Microservices',
    'Kafka',
    'PostgreSQL',
    'MongoDB',
    'Python',
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
  certificates: [
    { title: 'React Development', issuer: 'Alkemy', date: '2022', url: '/certificates/certificado-alkemy-react.pdf' },
    { title: 'Full Stack Java', issuer: 'Codo a Codo', date: '2022', url: '/certificates/certificado-codo-a-codo-fullstack-java.pdf' },
    { title: 'Spring Boot Specialization', issuer: 'Codo a Codo', date: '2023', url: '/certificates/certificado-especializacion-spring.pdf' },
  ],
} as const

const ES_DATA = {
  name: 'Mariano Guillaume',
  initials: 'MG',
  location: 'Buenos Aires, Argentina, GMT-3',
  locationLink: 'https://www.google.com.ar/maps/place/Buenos+Aires/',
  about:
    'Ingeniero Backend y Tech Lead especializado en Java y sistemas distribuidos, con más de 3 años entregando soluciones fintech en clientes enterprise.',
  summary:
    'Ingeniero backend convertido en Tech Lead con más de 3 años de experiencia remota construyendo y escalando sistemas fintech. Diseñé microservicios para plataformas con más de 40.000 usuarios, lideré equipos en migraciones técnicas complejas y tomé decisiones de arquitectura en múltiples cuentas de clientes enterprise. Actualmente lidero equipos de desarrollo en Stefanini y realizo evaluaciones técnicas para procesos de selección de ingeniería. Vivo en Buenos Aires, Argentina y tengo inglés profesional (C2).',
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
  work: [
    {
      company: 'Upward Solutions',
      title: 'Desarrollador Full Stack',
      start: '2022',
      end: '2024',
      description: '',
      bullets: [
        'Desarrollé microservicios con Node.js y Express.js como único desarrollador backend en un equipo de 3 personas, para una plataforma de liquidación de impuestos integrada con AFIP utilizada por contadores en Argentina.',
        'Desarrollé controllers para una REST API en Kotlin con Javalin, utilizada por ~700 usuarios semanalmente en producción.',
        'Migré bases de datos SQL (PostgreSQL y MySQL) con Flyway, manteniendo la integridad de los datos en cada release de producción.',
        'Alcancé un 80% de cobertura de código mediante tests unitarios.',
        'Construí un bot de web scraping con Python y Selenium, automatizando la extracción de datos fiscales desde fuentes externas.',
      ],
    },
    {
      company: 'Stefanini',
      title: 'Desarrollador Full Stack SemiSenior',
      start: '2024',
      end: '2025', // TODO: confirmar cuándo cambió el título a Tech Lead
      description:
        'Trabajé como consultor full stack para múltiples clientes, entregando soluciones backend y frontend en entornos productivos.',
      clients: [
        {
          name: 'RCI (Renault Credit International)',
          bullets: [
            'Gestioné el ciclo completo de desarrollo, deploys en producción y soporte técnico de Hub Digital (~200 usuarios), plataforma de gestión documental para rendiciones de gastos, solicitudes de seguros y facturas de proveedores.',
            'Desarrollé un panel de presupuesto anual con granularidad por departamento y permisos por rol',
            'Desarrollé un módulo de comisiones que procesa archivos CSV subidos por FTP mediante un job programado.',
            'Lideré la migración completa de AngularJS a Angular 17 en 3 microfrontends',
            'Lideré la portación de los frontends a una aplicación multiplataforma para iOS y Android con Ionic y Capacitor.',
            'Incorporé 3 QA engineers y 4 desarrolladores en múltiples ciclos de rotación, manteniendo la cadencia de entrega del equipo.',
            'Implementé Google Cloud Storage para el almacenamiento de archivos de usuarios y documentos.'
          ],
          techStack: ['Java', 'Angular 17', 'AngularJS', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage'],
        },
        {
          name: 'Interbanking',
          bullets: [
            'Desarrollé 2 de los 5 microservicios en la descomposición del monolito Java 8 de Interbanking, plataforma de pago de VEPs de AFIP utilizada por más de 40k empresas.',
            'Construí un servicio de pago con idempotencia y lock distribuido, eliminando race conditions bajo alta carga concurrente.',
            'Desarrollé un servicio de consulta de VEPs que aplica reglas de negocio específicas de AFIP, garantizando la precisión regulatoria en todas las cuentas.',
            'Migré el código base de Java 8 a Java 17, asegurando mantenibilidad a largo plazo y acceso a mejoras modernas del lenguaje.',
          ],
          techStack: ['Java 17', 'Quarkus', 'Microservicios', 'Oracle Database', 'MongoDB', 'Kafka'],
        },
        {
          name: 'LatinPay',
          bullets: [
            'Diagnostiqué y resolví bugs específicos de plataforma en una aplicación legacy .NET para iOS y Android.',
          ],
          techStack: ['.NET', 'iOS', 'Android'],
        },
      ],
    },
    {
      company: 'Stefanini',
      title: 'Tech Lead',
      start: '2025', // TODO: confirmar fecha exacta de inicio
      end: null,
      description:
        'Liderando equipos de desarrollo para múltiples clientes, tomando decisiones técnicas, realizando code reviews y apoyando a RRHH en procesos de selección técnica.',
      clients: [
        {
          name: 'RCI (Renault Credit International)',
          bullets: [
            'TODO: agregar descripción Tech Lead para RCI.',
          ],
          techStack: ['Java', 'Angular 17', 'Ionic', 'Capacitor'],
        },
        {
          name: 'Banco Macro',
          bullets: [
            'TODO: agregar descripción.',
          ],
        },
        {
          name: 'Ford',
          bullets: [
            'Realizo entrevistas técnicas y evalúo candidatos de ingeniería para posiciones vinculadas al cliente Ford.',
          ],
        },
      ],
    },
  ],
  skills: [
    'Java',
    'Spring Boot',
    'Quarkus',
    'Kotlin',
    'TypeScript',
    'Node.js',
    'Angular',
    'Microservices',
    'Kafka',
    'PostgreSQL',
    'MongoDB',
    'Python',
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
  certificates: [
    { title: 'React Development', issuer: 'Alkemy', date: '2022', url: '/certificates/certificado-alkemy-react.pdf' },
    { title: 'Full Stack Java', issuer: 'Codo a Codo', date: '2022', url: '/certificates/certificado-codo-a-codo-fullstack-java.pdf' },
    { title: 'Spring Boot Specialization', issuer: 'Codo a Codo', date: '2023', url: '/certificates/certificado-especializacion-spring.pdf' },
  ],
} as const

const RESUME_DATA = {
  en: EN_DATA,
  es: ES_DATA,
} as unknown as {
  [index: string]: Welcome
}

export { RESUME_DATA }
