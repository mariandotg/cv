import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToFile } from '@react-pdf/renderer'
import { RESUME_DATA } from '../data/resume.datav2'
import { CvDocument } from './components/CvDocument'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = path.resolve(__dirname, '../../public')

const LOCALE_CONFIGS = [
  { locale: 'en', filename: 'mariano-guillaume-cv-en.pdf' },
  { locale: 'es', filename: 'mariano-guillaume-cv-es.pdf' },
] as const

async function generatePdfs() {
  console.log('Generating PDF CVs...')

  for (const { locale, filename } of LOCALE_CONFIGS) {
    const data = RESUME_DATA[locale]
    const outputPath = path.join(OUTPUT_DIR, filename)

    process.stdout.write(`  Generating ${filename}... `)

    await renderToFile(
      <CvDocument data={data} locale={locale} />,
      outputPath,
    )

    console.log('done')
  }

  console.log('All PDFs generated successfully.')
}

generatePdfs().catch((err) => {
  console.error('PDF generation failed:', err)
  process.exit(1)
})
