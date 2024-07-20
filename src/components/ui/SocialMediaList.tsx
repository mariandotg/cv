import { type ReactNode } from 'react'
import type { Social } from '../../models/resume.data.models'
import { Button } from '../design-system/Button'
import { MailIcon } from '../icons/MailIcon'
import { ToggleTheme } from './ToggleTheme'

export interface SocialMediaListProps {
  email: string
  socials: readonly Social[]
  children: ReactNode
}

const SocialMediaList = ({
  email,
  socials,
  children,
}: SocialMediaListProps) => {
  return (
    <>
      {email ? (
        <Button className="size-8" variant="outline" size="icon" asChild>
          <a href={`mailto:${email}`}>
            <MailIcon className="size-4" />
          </a>
        </Button>
      ) : null}
      {socials.map((social) => (
        <Button
          key={social.name}
          className="size-8"
          variant="outline"
          size="icon"
          asChild
        >
          <a href={social.url}>
            <social.icon className="size-4" />
          </a>
        </Button>
      ))}
      {children}
    </>
  )
}
SocialMediaList.displayName = 'SocialMediaList'

export { SocialMediaList }
