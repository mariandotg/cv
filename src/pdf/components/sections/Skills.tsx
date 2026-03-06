import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { commonStyles } from '../../styles/common'
import { getPdfDictionary } from '../../dictionaries'

interface SkillsProps {
  skills: string[]
  locale: string
}

export const Skills: React.FC<SkillsProps> = ({ skills, locale }) => {
  const dict = getPdfDictionary(locale)
  return (
    <View style={commonStyles.sectionContainer}>
      <Text style={commonStyles.sectionTitle}>{dict.SKILLS}</Text>
      <View style={commonStyles.horizontalRule} />
      <Text>{skills.join('\u00A0\u00B7\u00A0')}</Text>
    </View>
  )
}
