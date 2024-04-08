import Date from '@/components/original/date'
import Work from '@/components/original/work'
import WorkPagination from '@/components/original/work-pagination'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site-data'
import { getWorkDetail, getWorkList } from '@/lib/newt'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: { [key: string]: string }
}

export async function generateStaticParams() {
  const works = await getWorkList()
  return works.map((work) => ({
    params: Number(work.case)
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const work = await getWorkDetail(id)
  if (work) {
    return {
      title: `${work.title} | ${site.title}`,
      description: `${work.title}について`
    }
  } else {
    return {
      title: site.metaTitle,
      description: site.description
    }
  }
}

const CasePage = async ({ params }: Props) => {
  const id = params.id
  const work = await getWorkDetail(id)
  if (!work) {
    return notFound()
  }
  return (
    <main className="container max-w-4xl pb-16 space-y-10">
      <div>
        <Date />
      </div>
      <div>
        <Work work={work} isLink={false} />
      </div>
      <div>
        <WorkPagination />
      </div>
      <div>
        <Button variant="outline" asChild>
          <Link href="/">TOP</Link>
        </Button>
      </div>
    </main>
  )
}

export default CasePage
