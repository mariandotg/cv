import React from 'react'
import { Document, Page } from '@react-pdf/renderer'
import { commonStyles } from '../styles/common'
import { Header } from './sections/Header'
import { Summary } from './sections/Summary'
import { WorkExperience } from './sections/WorkExperience'
import { Education } from './sections/Education'
import { Skills } from './sections/Skills'
import type { Welcome } from '../../models/resume.data.models'

interface CvDocumentProps {
  data: Welcome
  locale: string
}

export const CvDocument: React.FC<CvDocumentProps> = ({ data, locale }) => (
  <Document>
    <Page size="LETTER" style={commonStyles.page}>
      <Header data={data} />
      <Summary summary={data.summary} locale={locale} />
      <WorkExperience work={data.work} locale={locale} />
      <Education education={data.education} locale={locale} />
      <Skills skills={data.skills} locale={locale} />
    </Page>
  </Document>
)
