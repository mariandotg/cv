import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { THEME } from '../../styles/theme'
import { commonStyles } from '../../styles/common'
import { getPdfDictionary } from '../../dictionaries'
import type { Certificate } from '../../../models/resume.data.models'

const styles = StyleSheet.create({
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  title: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSize.body,
    color: THEME.colors.darkGray,
  },
  issuer: {
    fontSize: THEME.fontSize.body,
    color: THEME.colors.mediumGray,
  },
  date: {
    fontSize: THEME.fontSize.small,
    color: THEME.colors.mediumGray,
  },
  titleIssuer: {
    flexDirection: 'row',
    gap: 4,
  },
})

interface CertificatesProps {
  certificates: Certificate[]
  locale: string
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates, locale }) => {
  const dict = getPdfDictionary(locale)
  if (!certificates || certificates.length === 0) return null

  return (
    <View style={commonStyles.sectionContainer}>
      <Text style={commonStyles.sectionTitle}>{dict.CERTIFICATES}</Text>
      <View style={commonStyles.horizontalRule} />
      {certificates.map((cert, i) => (
        <View key={i} style={styles.entry} wrap={false}>
          <View style={styles.titleIssuer}>
            <Text style={styles.title}>{cert.title}</Text>
            <Text style={styles.issuer}>— {cert.issuer}</Text>
          </View>
          <Text style={styles.date}>{cert.date}</Text>
        </View>
      ))}
    </View>
  )
}
