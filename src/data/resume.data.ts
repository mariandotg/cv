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
    'Backend engineer turned Tech Lead with 3+ years of remote experience building and scaling fintech systems. I have designed microservices for platforms serving 40,000+ users, led cross-functional teams through major technical migrations, and driven architectural decisions across multiple enterprise client accounts. Currently leading development teams at Stefanini while also conducting technical assessments for engineering hiring. Based in Buenos Aires, Argentina with advanced-level English (B2).',
  avatarUrl: 'me.webp',
  personalWebsiteUrl: 'https://marianoguillaume.com',
  resumeUrl: 'mariano-guillaume-cv-en.pdf',
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
      title: 'Backend Developer',
      start: '2022',
      end: '2024',
      description: '',
      techStack: ['Node.js', 'Express.js', 'Kotlin', 'PostgreSQL', 'MySQL', 'Python', 'Selenium'],
      bullets: [
        'Engineered Node.js and Express.js microservices as sole backend developer on a 3-person team, for an AFIP-integrated tax liquidation platform serving accountants across Argentina.',
        'Built REST API endpoints in Kotlin with Javalin for a second service within the AFIP tax ecosystem, delivering features to ~700 weekly active users.',
        'Migrated SQL databases (PostgreSQL and MySQL) using Flyway, maintaining data integrity across production releases.',
        'Achieved 80% unit test coverage on the tax liquidation backend, enabling safer production deployments and faster refactoring.',
        'Built a Python and Selenium scraping bot that automated fiscal data extraction, eliminating periodic manual downloads and reducing team overhead.',
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
            'Owned end-to-end delivery of Hub Digital (~200 users), an internal document management platform for expense reports, insurance requests, and vendor invoices—including production deployments and ongoing technical support.',
            'Onboarded 3 QA engineers and 4 developers across multiple rotation cycles over 18 months, maintaining consistent delivery pace.',
            'Developed a role-based annual budget dashboard replacing spreadsheet-based tracking, giving department managers real-time visibility with granular permission controls.',
            'Delivered a commission tracking module enabling the business to automate commission calculations for the first time, processing FTP-uploaded CSV files via a scheduled batch job.',
            'Led the incremental AngularJS-to-Angular 17 migration across 3 microfrontends with zero service interruption, eliminating a critical legacy dependency.',
            'Led the migration of Hub Digital\'s web frontends to a cross-platform iOS and Android application using Ionic and Capacitor, reaching full production.',
            'Integrated Google Cloud Storage and Document AI to automate invoice data extraction, replacing fully manual data entry for the document management workflow.',
          ],
          techStack: ['Java', 'Spring Boot', 'Angular 17', 'AngularJS', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage'],
        },
        {
          name: 'Interbanking',
          bullets: [
            'Engineered 2 of 5 Quarkus microservices in the decomposition of Interbanking\'s Java 8 monolith, replacing legacy infrastructure for the VEP payment platform serving 40k+ companies paying AFIP tax obligations.',
            'Built a payment service with idempotency and distributed locking, eliminating race conditions under high concurrent load.',
            'Developed a VEP retrieval service enforcing AFIP-specific business rules, ensuring regulatory compliance and accurate tax obligation lookup for 40k+ users.',
            'Migrated the codebase from Java 8 to Java 17, reducing technical debt and enabling modern language features across the platform.',
          ],
          techStack: ['Java 17', 'Quarkus', 'Microservices', 'Node.js', 'Nest.js', 'Oracle Database', 'MongoDB', 'Kafka'],
        },
        {
          name: 'LatinPay',
          bullets: [
            'Diagnosed and resolved critical platform-specific crashes on a legacy .NET iOS and Android application, restoring stable access for affected users.',
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
            'Lead a cross-functional team of 2 developers and 1 QA engineer, authoring functional specs and technical documents to reduce ambiguity and maintain delivery pace.',
            'Own the client relationship as sole technical point of contact, translating business requirements into actionable specifications across weekly stakeholder meetings.',
            'Lead the design of a proprietary LLM + template-based OCR system for invoice text extraction, projected to reduce cloud infrastructure costs by up to 80%.',
            'Delivered the full migration of the invoice approval (pago a proveedores) flow to the mobile app as the first production MVP, enabling end-to-end document approval on iOS and Android.',
            'Lead the ARCA/AFIP regulatory integration into the invoice approval flow across both the Hub Digital web and mobile platforms.',
            'Design a push notifications system using RabbitMQ for the next mobile MVP release.',
          ],
          techStack: ['Java', 'Spring Boot', 'Angular 17', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage', 'RabbitMQ'],
        },
        {
          name: 'Banco Macro',
          bullets: [
            'Serve as development module lead for Sainapse at Banco Macro, acting as primary technical contact for client engineers adopting an AI-powered platform that uses LLMs for automated code analysis and integrates AI across planning, development, and QA workflows.',
            'Coordinate across a PM, QA lead, and 2 DevOps engineers to scope and ship product upgrades—including bug fixes and new features—aligned with Banco Macro\'s enterprise requirements.',
            'Designed and implemented a cloud abstraction layer across 5 microservices, enabling deployment on either AWS (DynamoDB, S3, Bedrock, Secrets Manager) or GCP (Cloud Storage, Firestore, Vertex AI, Secret Manager) without code changes.',
            'Built a provider-agnostic git integration layer across 2 microservices, enabling Sainapse\'s repository analysis to run on both GitHub and GitLab without code changes.',
            'Delivered a standalone code quality audit of Banco Macro\'s repositories to the client, establishing a technical baseline to track the impact of Sainapse adoption.',
          ],
          techStack: ['Python', 'FastAPI', 'Microservices', 'AWS', 'GCP', 'Generative AI', 'Machine Learning'],
        },
        {
          name: 'Ford',
          bullets: [
            'Conduct technical interviews and assess mid-to-senior engineering candidates for Ford-related engineering positions.',
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
    'Ingeniero Backend y Tech Lead especializado en Java y sistemas distribuidos, con más de 3 años entregando soluciones fintech en clientes enterprise.',
  summary:
    'Ingeniero backend convertido en Tech Lead con más de 3 años de experiencia remota construyendo y escalando sistemas fintech. Diseñé microservicios para plataformas con más de 40.000 usuarios, lideré equipos en migraciones técnicas complejas y tomé decisiones de arquitectura en múltiples cuentas de clientes enterprise. Actualmente lidero equipos de desarrollo en Stefanini y realizo evaluaciones técnicas para procesos de selección de ingeniería. Vivo en Buenos Aires, Argentina y tengo inglés avanzado (B2).',
  avatarUrl: 'me.webp',
  personalWebsiteUrl: 'https://marianoguillaume.com/es',
  resumeUrl: 'mariano-guillaume-cv-es.pdf',
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
      title: 'Desarrollador Backend',
      start: '2022',
      end: '2024',
      description: '',
      techStack: ['Node.js', 'Express.js', 'Kotlin', 'PostgreSQL', 'MySQL', 'Python', 'Selenium'],
      bullets: [
        'Desarrollé microservicios con Node.js y Express.js como único desarrollador backend en un equipo de 3 personas, para una plataforma de liquidación de impuestos integrada con AFIP utilizada por contadores en Argentina.',
        'Desarrollé endpoints en Kotlin con Javalin para un segundo servicio dentro del ecosistema tributario de AFIP, con ~700 usuarios activos semanales.',
        'Migré bases de datos SQL (PostgreSQL y MySQL) con Flyway, manteniendo la integridad de los datos en cada release de producción.',
        'Alcancé un 80% de cobertura de tests unitarios en el backend de liquidación impositiva, permitiendo deploys más seguros y refactorizaciones más ágiles.',
        'Construí un bot de scraping con Python y Selenium que automatizó la extracción de datos fiscales, eliminando descargas manuales periódicas del equipo.',
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
            'Tuve ownership completo de Hub Digital (~200 usuarios), plataforma interna de gestión documental para rendiciones de gastos, seguros y facturas de proveedores, incluyendo deploys en producción y soporte técnico continuo.',
            'Incorporé 3 QA engineers y 4 desarrolladores en múltiples ciclos de rotación durante 18 meses, manteniendo la cadencia de entrega del equipo.',
            'Desarrollé un panel de presupuesto anual basado en roles que reemplazó el seguimiento manual en planillas, brindando visibilidad en tiempo real a nivel departamental con controles de permisos granulares.',
            'Entregué un módulo de seguimiento de comisiones que automatizó este proceso por primera vez, procesando archivos CSV subidos por FTP mediante un job programado.',
            'Lideré la migración incremental de AngularJS a Angular 17 en 3 microfrontends sin interrupciones de servicio, eliminando una dependencia legacy crítica.',
            'Lideré la migración de los frontends de Hub Digital a una aplicación multiplataforma iOS y Android con Ionic y Capacitor, alcanzando producción completa.',
            'Integré Google Cloud Storage y Document AI para automatizar la extracción de datos de facturas, reemplazando la carga manual de datos en el flujo de gestión documental.',
          ],
          techStack: ['Java', 'Spring Boot', 'Angular 17', 'AngularJS', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage'],
        },
        {
          name: 'Interbanking',
          bullets: [
            'Desarrollé 2 de los 5 microservicios en Quarkus para la descomposición del monolito Java 8 de Interbanking, reemplazando infraestructura legacy en la plataforma de pago de VEPs utilizada por más de 40k empresas.',
            'Construí un servicio de pago con idempotencia y lock distribuido, eliminando race conditions bajo alta carga concurrente.',
            'Desarrollé un servicio de consulta de VEPs que aplica reglas de negocio específicas de AFIP, garantizando precisión regulatoria para más de 40k usuarios.',
            'Migré el código base de Java 8 a Java 17, reduciendo la deuda técnica y habilitando mejoras modernas del lenguaje en toda la plataforma.',
          ],
          techStack: ['Java 17', 'Quarkus', 'Microservicios', 'Node.js', 'Nest.js', 'Oracle Database', 'MongoDB', 'Kafka'],
        },
        {
          name: 'LatinPay',
          bullets: [
            'Diagnostiqué y resolví crashes críticos específicos de plataforma en una aplicación legacy .NET para iOS y Android, restaurando el acceso estable de los usuarios afectados.',
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
            'Lidero un equipo cross-funcional de 2 desarrolladores y 1 QA, redactando especificaciones funcionales y documentos técnicos para reducir la ambigüedad y sostener la cadencia de entrega.',
            'Soy el único punto de contacto técnico con el cliente, traduciendo requerimientos de negocio en especificaciones técnicas accionables en reuniones semanales de seguimiento.',
            'Lidero el diseño de un sistema OCR propio basado en LLMs y templates para extracción de texto de facturas, con una reducción proyectada de hasta el 80% en costos de infraestructura en la nube.',
            'Entregué la migración completa del flujo de aprobación de facturas (pago a proveedores) a la app móvil como primer MVP productivo, habilitando la aprobación end-to-end en iOS y Android.',
            'Lidero la integración regulatoria con ARCA/AFIP en el flujo de pago a proveedores, tanto en la versión web como móvil de Hub Digital.',
            'Diseño un sistema de notificaciones push con RabbitMQ para el próximo MVP de la app móvil.',
          ],
          techStack: ['Java', 'Spring Boot', 'Angular 17', 'Ionic', 'Capacitor', 'TypeScript', 'SQL Server', 'Activiti BPMN', 'Google Cloud Storage', 'RabbitMQ'],
        },
        {
          name: 'Banco Macro',
          bullets: [
            'Lidero el módulo de desarrollo de Sainapse en Banco Macro, siendo el referente técnico principal para los ingenieros del cliente que adoptan una plataforma potenciada por IA que utiliza LLMs para análisis automático de código e integra IA en las etapas de planificación, desarrollo y QA.',
            'Coordino un equipo compuesto por un PM, un líder de QA y 2 DevOps para definir y entregar mejoras al producto —incluyendo correcciones de bugs y nuevas funcionalidades— alineadas con los requerimientos enterprise de Banco Macro.',
            'Diseñé e implementé una capa de abstracción de cloud en 5 microservicios, habilitando el despliegue tanto en AWS (DynamoDB, S3, Bedrock, Secrets Manager) como en GCP (Cloud Storage, Firestore, Vertex AI, Secret Manager) sin cambios en el código.',
            'Construí una capa de integración git agnóstica al proveedor en 2 microservicios, habilitando el análisis de repositorios de Sainapse tanto en GitHub como en GitLab sin cambios en el código.',
            'Entregué una auditoría de calidad de código de los repositorios de Banco Macro directamente al cliente, estableciendo una línea base técnica para medir el impacto de la adopción de Sainapse.',
          ],
          techStack: ['Python', 'FastAPI', 'Microservicios', 'AWS', 'GCP', 'IA Generativa', 'Machine Learning'],
        },
        {
          name: 'Ford',
          bullets: [
            'Realizo entrevistas técnicas y evalúo candidatos de nivel semi-senior y senior para posiciones de ingeniería vinculadas al cliente Ford.',
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
