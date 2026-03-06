import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { THEME } from '../../styles/theme'
import { commonStyles } from '../../styles/common'
import { getPdfDictionary } from '../../dictionaries'
import type { Work, WorkClient } from '../../../models/resume.data.models'

const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: THEME.spacing.itemGap,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  company: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSize.jobTitle,
    color: THEME.colors.black,
  },
  dateRange: {
    fontSize: THEME.fontSize.small,
    color: THEME.colors.mediumGray,
  },
  jobTitle: {
    fontFamily: THEME.fonts.bodyItalic,
    fontSize: THEME.fontSize.body,
    color: THEME.colors.mediumGray,
    marginBottom: 3,
  },
  techStack: {
    fontSize: THEME.fontSize.small,
    color: THEME.colors.lightGray,
    marginTop: 2,
    marginBottom: 1,
  },
  techLabel: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSize.small,
  },
  clientBlock: {
    marginTop: 4,
    marginBottom: 3,
    paddingLeft: 6,
  },
  clientName: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSize.body,
    color: THEME.colors.darkGray,
    marginBottom: 2,
  },
})

const BulletList: React.FC<{ bullets: readonly string[] }> = ({ bullets }) => (
  <View>
    {bullets.map((bullet, i) => (
      <View key={i} style={commonStyles.bulletItem}>
        <Text style={commonStyles.bulletDot}>{'\u2022'}</Text>
        <Text style={commonStyles.bulletText}>{bullet}</Text>
      </View>
    ))}
  </View>
)

const TechStack: React.FC<{ stack: readonly string[] }> = ({ stack }) => (
  <Text style={styles.techStack}>
    <Text style={styles.techLabel}>Technologies: </Text>
    {stack.join(', ')}
  </Text>
)

const ClientEntry: React.FC<{ client: WorkClient }> = ({ client }) => (
  <View style={styles.clientBlock}>
    <Text style={styles.clientName} minPresenceAhead={20}>{client.name}</Text>
    <BulletList bullets={client.bullets} />
    {client.techStack && client.techStack.length > 0 && (
      <TechStack stack={client.techStack} />
    )}
  </View>
)

const WorkEntry: React.FC<{ work: Work; presentLabel: string }> = ({ work, presentLabel }) => (
  <View style={styles.entryContainer}>
    <View style={styles.entryHeader} wrap={false}>
      <Text style={styles.company}>{work.company}</Text>
      <Text style={styles.dateRange}>
        {work.start} — {work.end ?? presentLabel}
      </Text>
    </View>
    <Text style={styles.jobTitle}>{work.title}</Text>

    {work.bullets && work.bullets.length > 0 && (
      <BulletList bullets={work.bullets} />
    )}
    {work.techStack && work.techStack.length > 0 && (
      <TechStack stack={work.techStack} />
    )}

    {work.clients && work.clients.length > 0 && (
      <View>
        {work.clients.map((client, i) => (
          <ClientEntry key={i} client={client} />
        ))}
      </View>
    )}
  </View>
)

interface WorkExperienceProps {
  work: Work[]
  locale: string
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ work, locale }) => {
  const dict = getPdfDictionary(locale)
  const reversed = [...work].reverse()

  return (
    <View style={commonStyles.sectionContainer}>
      <Text style={commonStyles.sectionTitle}>{dict.EXPERIENCE}</Text>
      <View style={commonStyles.horizontalRule} />
      {reversed.map((entry, i) => (
        <WorkEntry key={i} work={entry} presentLabel={dict.PRESENT} />
      ))}
    </View>
  )
}
