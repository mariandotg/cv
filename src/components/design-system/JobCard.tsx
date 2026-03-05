import React from 'react'
import { Card, CardContent, CardHeader } from './Card'
import { Badge } from './Badge'
import type { Work } from '../../models/resume.data.models'

interface Props {
  work: Work
}

const JobCard: React.FunctionComponent<Props> = ({ work }) => {
  return (
    <Card key={work.company} className="print-avoid-break bg-transparent">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            {work.company}
          </h3>
          <div className="text-sm tabular-nums text-gray-400">
            {work.start} - {work.end ?? 'Present'}
          </div>
        </div>

        <h4 className="font-base text-sm leading-none print:text-[12px]">
          {work.title}
        </h4>
      </CardHeader>
      <CardContent className="mt-2 text-base print:text-[10px]">
        {work.bullets && work.bullets.length > 0 ? (
          <ul className="ml-4 list-disc flex flex-col gap-1">
            {work.bullets.map((bullet, i) => (
              <li key={i} className="text-sm text-muted-foreground print:text-[10px]">{bullet}</li>
            ))}
          </ul>
        ) : (
          work.description
        )}
        {work.techStack && work.techStack.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {work.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {work.clients && work.clients.length > 0 && (
          <div className="mt-4 flex flex-col gap-2">
            {work.clients.map((client) => (
              <div
                key={client.name}
                className="rounded-md border border-border bg-card p-3 print-avoid-break"
              >
                <p className="text-sm font-semibold">{client.name}</p>
                <ul className="mt-2 ml-4 list-disc flex flex-col gap-1">
                  {client.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground print:text-[9px]">
                      {bullet}
                    </li>
                  ))}
                </ul>
                {client.techStack && client.techStack.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {client.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export { JobCard }
