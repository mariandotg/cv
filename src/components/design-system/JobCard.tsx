import React from 'react'
import { Card, CardContent, CardHeader } from './Card'
import type { Work } from '../../models/resume.data.models'

interface Props {
  work: Work
}

const JobCard: React.FunctionComponent<Props> = ({ work }) => {
  return (
    <Card key={work.company} className="bg-transparent">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            {work.company}

            {/* <span className="inline-flex gap-x-1">
              {work.badges.map((badge) => (
                <Badge
                  variant="secondary"
                  className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                  key={badge}
                >
                  {badge}
                </Badge>
              ))}
            </span> */}
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
        {work.description}
      </CardContent>
    </Card>
  )
}

export { JobCard }
