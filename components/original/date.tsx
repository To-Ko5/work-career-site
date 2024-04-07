import React from 'react'
import { format } from 'date-fns'
import { date } from '@/data/site-data'
const Date = () => {
  return (
    <p className="text-right text-sm text-muted-foreground mb-4">
      <time>{format(date.lastUpdatedAt, 'yyyy/MM/dd')}</time>
    </p>
  )
}

export default Date
