import type { Dictionaries, Dictionary } from '../models/dictionary.model'

const EN_DICTIONARY: Dictionary = {
  DOWNLOAD: 'Download Resume',
  ABOUT: 'About',
  CURRENT_JOB: 'Present',
  PROJECTS: 'Projects',
  SKILLS: 'Skills',
  WORK_EXP: 'Work Experience',
}

const ES_DICTIONARY: Dictionary = {
  DOWNLOAD: 'Descargar CV',
  ABOUT: 'Sobre mi',
  CURRENT_JOB: 'Actualmente',
  PROJECTS: 'Proyectos',
  SKILLS: 'Habilidades',
  WORK_EXP: 'Experiencia Laboral',
}

const DICTIONARIES = {
  en: EN_DICTIONARY,
  es: ES_DICTIONARY,
} as Dictionaries

export { DICTIONARIES }
