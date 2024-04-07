import { Button } from '@/components/ui/button'
import { site } from '@/data/site-data'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `ページが見つかりません | ${site.title}`,
  description: site.description
}

const NotFound = () => {
  return (
    <main className="container max-w-4xl">
      <div className="text-center mt-32">ページが見つかりません</div>
      <div className="mt-32">
        <Button variant="outline" asChild>
          <Link href="/">TOP</Link>
        </Button>
      </div>
    </main>
  )
}

export default NotFound
