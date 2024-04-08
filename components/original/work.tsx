import WorkDescription from '@/components/original/work-description'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { work } from '@/types/data'
import { differenceInMonths, format } from 'date-fns'
import Link from 'next/link'
import { useCallback } from 'react'

type Props = {
  work: work
  isLink?: boolean
}

const Work = ({ work, isLink = true }: Props) => {
  const dateFormat = useCallback((date: string) => {
    return format(date, 'yyyy/MM')
  }, [])

  const setTitle = useCallback(() => {
    if (isLink) {
      return (
        <Link
          className="hover:underline text-xl"
          scroll={false}
          href={`/case/${work.case}`}
        >
          {work.title}
        </Link>
      )
    } else {
      return <div className="text-xl">{work.title}</div>
    }
  }, [work, isLink])

  const setPeriod = useCallback((startDate: string, endDate: string) => {
    const monthsDifference = differenceInMonths(endDate, startDate)
    const years = Math.floor(monthsDifference / 12) // 年数
    const months = monthsDifference % 12
    let result = ''
    if (years > 0) {
      result += `${years}年`
    }
    if (months > 0) {
      result += `${months}ヶ月`
    }
    return `（${result}）`
  }, [])

  return (
    <section>
      <Card className="print:shadow-none">
        <CardHeader>
          <div className="text-sm text-right tabular-nums text-muted-foreground sm:hidden mb-3">
            <span>
              {dateFormat(work.startDate)} - {dateFormat(work.endDate)}
            </span>
            <span>{setPeriod(work.startDate, work.endDate)}</span>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none mb-2">
              {setTitle()}
            </h3>
            <div className="text-sm tabular-nums text-muted-foreground hidden sm:block">
              <span>
                {dateFormat(work.startDate)} - {dateFormat(work.endDate)}
              </span>
              <span>{setPeriod(work.startDate, work.endDate)}</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {work.positions.map((position, index) => {
              return (
                <Badge variant="outline" key={index}>
                  {position}
                </Badge>
              )
            })}
          </div>
        </CardHeader>

        <CardContent>
          <h4 className="text-sm font-semibold mb-2">使用技術</h4>
          <div className="flex gap-2 flex-wrap">
            {work.skills.map((skill, index) => {
              return (
                <Badge variant="outline" key={index}>
                  {skill}
                </Badge>
              )
            })}
          </div>
        </CardContent>

        <CardContent>
          <h4 className="text-sm font-semibold mb-2">使用ツール</h4>
          <div className="flex gap-2 flex-wrap">
            {work.tools.map((tool, index) => {
              return (
                <Badge variant="outline" key={index}>
                  {tool}
                </Badge>
              )
            })}
          </div>
        </CardContent>

        <CardContent className="text-sm text-muted-foreground whitespace-pre-line">
          <WorkDescription content={work.description || ''} />
        </CardContent>
      </Card>
    </section>
  )
}

export default Work
