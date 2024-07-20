import React from 'react'
import { Card, CardContent, CardHeader } from './Card'
import type { Project } from '../../models/resume.data.models'
import { Badge } from './Badge'

interface Props {
  project: Project
}

const ProjectCard: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <Card className="p-2">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            {project.title}
          </h3>
        </div>

        <a
          href={project.link.href}
          className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
          target="_blank"
        >
          {project.link.label}
        </a>
      </CardHeader>
      <CardContent className="mt-2 text-sm print:text-[10px] flex flex-col gap-y-2">
        {project.description}
        <div className="flex gap-1">
          {project.techStack.map((tech) => (
            <Badge variant={'secondary'}>{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export { ProjectCard }
