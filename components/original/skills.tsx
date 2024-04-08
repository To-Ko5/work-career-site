import React, { useMemo } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  skills: string[]
}
const Skills = ({ skills }: Props) => {
  const firstChunk = useMemo(() => skills.slice(0, 4), [skills])
  const secondChunk = useMemo(() => skills.slice(4, 10), [skills])
  const thirdChunk = useMemo(() => skills.slice(10), [skills])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="flex gap-2 flex-wrap mb-2">
        {firstChunk.map((skill, index) => {
          return (
            <div key={index} className={cn('border', 'p-2', 'rounded-md')}>
              {skill}
            </div>
          )
        })}
      </div>

      <div className="flex gap-2 flex-wrap mb-2">
        {secondChunk.map((skill, index) => {
          return (
            <div key={index} className={cn('border', 'p-2', 'rounded-md')}>
              {skill}
            </div>
          )
        })}
      </div>

      <div className="flex gap-2 flex-wrap">
        {thirdChunk.map((skill, index) => {
          return (
            <div key={index} className={cn('border', 'p-2', 'rounded-md')}>
              {skill}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
