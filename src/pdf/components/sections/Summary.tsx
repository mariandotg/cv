import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { commonStyles } from '../../styles/common'
import { getPdfDictionary } from '../../dictionaries'

interface SummaryProps {
  summary: string
  locale: string
}

export const Summary: React.FC<SummaryProps> = ({ summary, locale }) => {
  const dict = getPdfDictionary(locale)
  return (
    <View style={commonStyles.sectionContainer}>
      <Text style={commonStyles.sectionTitle}>{dict.SUMMARY}</Text>
      <View style={commonStyles.horizontalRule} />
      <Text>{summary}</Text>
    </View>
  )
}
