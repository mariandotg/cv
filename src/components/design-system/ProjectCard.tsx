import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './Card'
import type { Project } from '../../models/resume.data.models'
import { Badge } from './Badge'

interface Props {
  project: Project
}

const ProjectCard: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <Card className="flex flex-col overflow-hidden bg-transparent">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-title underline-offset-2 mb-1 tracking-normal	">
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                className="inline-flex items-center gap-2 hover:underline"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {project.link?.href
              .replace('https://', '')
              .replace('www.', '')
              .replace('/', '')}
          </div>
          <CardDescription className="font-base text-base print:text-[10px]">
            {project.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <Badge variant="secondary" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export { ProjectCard }
