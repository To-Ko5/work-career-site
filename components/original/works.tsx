import React from 'react'
import Work from './work'
import { works } from '@/data/data'

const Works = () => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Works</h2>

      <div className="space-y-8">
        {works.map((work) => {
          return <Work key={work.case} work={work} isLink={false} />
        })}
      </div>
    </section>
  )
}

export default Works
