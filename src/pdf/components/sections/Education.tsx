import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { THEME } from '../../styles/theme'
import { commonStyles } from '../../styles/common'
import { getPdfDictionary } from '../../dictionaries'
import type { Education as EducationEntry } from '../../../models/resume.data.models'

const styles = StyleSheet.create({
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  institution: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSize.jobTitle,
    color: THEME.colors.black,
  },
  degree: {
    fontFamily: THEME.fonts.bodyItalic,
    fontSize: THEME.fontSize.body,
    color: THEME.colors.mediumGray,
    marginTop: 1,
  },
  dateRange: {
    fontSize: THEME.fontSize.small,
    color: THEME.colors.mediumGray,
  },
})

interface EducationProps {
  education: EducationEntry[]
  locale: string
}

export const Education: React.FC<EducationProps> = ({ education, locale }) => {
  const dict = getPdfDictionary(locale)
  if (!education || education.length === 0) return null

  return (
    <View style={commonStyles.sectionContainer}>
      <Text style={commonStyles.sectionTitle}>{dict.EDUCATION}</Text>
      <View style={commonStyles.horizontalRule} />
      {education.map((edu, i) => (
        <View key={i} style={styles.entry} wrap={false}>
          <View>
            <Text style={styles.institution}>{edu.institution}</Text>
            <Text style={styles.degree}>{edu.degree}</Text>
          </View>
          <Text style={styles.dateRange}>
            {edu.start} — {edu.end ?? dict.IN_PROGRESS}
          </Text>
        </View>
      ))}
    </View>
  )
}
