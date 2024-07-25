import { type ReactNode } from 'react'
import type { Social } from '../../models/resume.data.models'
import { Button } from '../design-system/Button'
import { MailIcon } from '../icons/MailIcon'

export interface SocialMediaListProps {
  email: string
  socials: readonly Social[]
  resume: string
  children: ReactNode
  locale: string
}

const LOCALIZED_LABELS = {
  es: {
    EMAIL: 'Escribeme un email',
    SOCIAL: 'Encontrame en',
  },
  en: {
    EMAIL: 'Write me an email',
    SOCIAL: 'Find me on',
  },
} as { [index: string]: { EMAIL: string; SOCIAL: string } }

const SocialMediaList = ({
  email,
  socials,
  resume,
  children,
  locale,
}: SocialMediaListProps) => {
  console.log(locale)
  return (
    <>
      {email ? (
        <Button className="size-8" variant="secondary" size="icon" asChild>
          <a
            href={`mailto:${email}`}
            aria-label={LOCALIZED_LABELS[locale].EMAIL}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <MailIcon className="size-4" />
          </a>
        </Button>
      ) : null}
      {socials.map((social) => (
        <Button
          key={social.name}
          className="size-8"
          variant="secondary"
          size="icon"
          asChild
        >
          <a
            href={social.url}
            aria-label={`${LOCALIZED_LABELS[locale].SOCIAL} ${social.name}`}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <social.icon className="size-4" />
          </a>
        </Button>
      ))}
      {children}
      <Button className="h-8" variant="default" size="sm" asChild>
        <a href={resume} target="_blank" referrerPolicy="no-referrer">
          Descargar CV
        </a>
      </Button>
    </>
  )
}
SocialMediaList.displayName = 'SocialMediaList'

export { SocialMediaList }
