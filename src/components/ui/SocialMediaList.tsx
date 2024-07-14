import type { Social } from '../../models/resume.data.models'
import { Button } from '../design-system/Button'

export interface SocialMediaListProps {
  socials: readonly Social[]
}

const SocialMediaList = ({ socials }: SocialMediaListProps) =>
  socials.map((social) => (
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
  ))
SocialMediaList.displayName = 'SocialMediaList'

export { SocialMediaList }
