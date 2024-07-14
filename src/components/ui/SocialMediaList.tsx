import { Button } from '../design-system/Button'

export interface Socials {
  name: string
  url: string
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

export interface SocialMediaListProps {
  socials: readonly Socials[]
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
