import { StyleSheet } from '@react-pdf/renderer'
import { THEME } from './theme'

export const commonStyles = StyleSheet.create({
  page: {
    fontFamily: THEME.fonts.body,
    fontSize: THEME.fontSize.body,
    paddingTop: THEME.spacing.pageMargin,
    paddingBottom: THEME.spacing.pageMargin,
    paddingHorizontal: THEME.spacing.pageMargin,
    color: THEME.colors.darkGray,
    lineHeight: THEME.spacing.lineHeight,
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSize.sectionTitle,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 3,
    color: THEME.colors.black,
  },
  horizontalRule: {
    borderBottomWidth: 0.75,
    borderBottomColor: THEME.colors.rule,
    marginBottom: 6,
  },
  thickRule: {
    borderBottomWidth: 1.25,
    borderBottomColor: THEME.colors.black,
    marginBottom: 5,
  },
  sectionContainer: {
    marginBottom: THEME.spacing.sectionGap,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: THEME.spacing.bulletIndent,
  },
  bulletDot: {
    width: 8,
    fontSize: THEME.fontSize.body,
    color: THEME.colors.darkGray,
  },
  bulletText: {
    flex: 1,
    fontSize: THEME.fontSize.body,
    color: THEME.colors.darkGray,
    lineHeight: THEME.spacing.lineHeight,
  },
})
