'use client'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { works } from '@/data/data'
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

const WorkPagination = () => {
  const params = useParams()
  const paramsId = Number(params.id)

  const checkFirstPage = useCallback(() => {
    return paramsId === 1
  }, [paramsId])

  const checkEndPage = useCallback(() => {
    return paramsId === works.length
  }, [paramsId])

  return (
    <Pagination>
      <PaginationContent>
        {!checkFirstPage() && (
          <PaginationItem>
            <PaginationPrevious href={`${paramsId - 1}`} />
          </PaginationItem>
        )}
        {!checkEndPage() && (
          <PaginationItem>
            <PaginationNext href={`${paramsId + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

export default WorkPagination
