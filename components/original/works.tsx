import Work from '@/components/original/work'
import { work } from '@/types/data'

type Props = {
  works: work[]
}

const Works = ({ works }: Props) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Works</h2>

      <div className="space-y-8">
        {works.map((work) => {
          return <Work key={work.case} work={work} isLink={true} />
        })}
      </div>
    </section>
  )
}

export default Works
