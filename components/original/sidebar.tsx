'use client'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { works } from '@/data/data'
import { MenuIcon, MoreHorizontalIcon } from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        {works.map((work) => {
          return (
            <SheetHeader className="mb-4" key={work.case}>
              <SheetTitle className="text-md">
                <Link
                  className="hover:underline"
                  href={`/case/${work.case}`}
                  scroll={false}
                >
                  {work.project}
                </Link>
              </SheetTitle>
              <div className="flex gap-x-2">
                <SheetDescription className="line-clamp-2 mb-2">
                  {work.description.text}
                </SheetDescription>
                <div className="text-right">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/case/${work.case}`} scroll={false}>
                      <MoreHorizontalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetHeader>
          )
        })}
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
