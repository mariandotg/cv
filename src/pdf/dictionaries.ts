const PDF_DICTIONARIES: Record<string, Record<string, string>> = {
  en: {
    SUMMARY: 'Summary',
    EXPERIENCE: 'Experience',
    SKILLS: 'Skills',
    CERTIFICATES: 'Certificates',
    EDUCATION: 'Education',
    PRESENT: 'Present',
    IN_PROGRESS: 'In Progress',
  },
  es: {
    SUMMARY: 'Resumen',
    EXPERIENCE: 'Experiencia Laboral',
    SKILLS: 'Habilidades',
    CERTIFICATES: 'Certificaciones',
    EDUCATION: 'Educación',
    PRESENT: 'Actualidad',
    IN_PROGRESS: 'En curso',
  },
}

export function getPdfDictionary(locale: string): Record<string, string> {
  return PDF_DICTIONARIES[locale] ?? PDF_DICTIONARIES.en
}
