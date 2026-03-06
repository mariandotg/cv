import React from 'react'
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer'
import { THEME } from '../../styles/theme'
import { commonStyles } from '../../styles/common'
import type { Welcome } from '../../../models/resume.data.models'

const styles = StyleSheet.create({
  nameContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSize.name,
    textAlign: 'center',
    color: THEME.colors.black,
  },
  contactLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontSize: THEME.fontSize.contact,
    color: THEME.colors.mediumGray,
    marginBottom: 2,
  },
  separator: {
    color: THEME.colors.lightGray,
    marginHorizontal: 4,
  },
  link: {
    color: THEME.colors.mediumGray,
    textDecoration: 'none',
  },
  about: {
    fontSize: THEME.fontSize.small,
    color: THEME.colors.mediumGray,
    textAlign: 'center',
    marginTop: 3,
  },
})

interface HeaderProps {
  data: Welcome
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const contactParts: Array<{ text: string; href?: string }> = []

  const location = data.location.replace(/, GMT.*$/, '')
  contactParts.push({ text: location })
  contactParts.push({ text: data.contact.email, href: `mailto:${data.contact.email}` })

  for (const social of data.contact.social) {
    if (social.name === 'LinkedIn' || social.name === 'GitHub') {
      contactParts.push({ text: social.name, href: social.url })
    }
  }

  return (
    <View style={commonStyles.sectionContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{data.name}</Text>
      </View>
      <View style={commonStyles.thickRule} />
      <View style={styles.contactLine}>
        {contactParts.map((part, i) => (
          <React.Fragment key={i}>
            {i > 0 && <Text style={styles.separator}>|</Text>}
            {part.href ? (
              <Link src={part.href} style={styles.link}>
                {part.text}
              </Link>
            ) : (
              <Text>{part.text}</Text>
            )}
          </React.Fragment>
        ))}
      </View>
      <Text style={styles.about}>{data.about}</Text>
    </View>
  )
}
