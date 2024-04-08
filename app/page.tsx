import About from '@/components/original/about'
import Date from '@/components/original/date'
import Profile from '@/components/original/profile'
import Works from '@/components/original/works'
import Skills from '@/components/original/skills'
import { site } from '@/data/site-data'
import { getAbout, getSkillList, getWorkList } from '@/lib/newt'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.description
}

export default async function Home() {
  const works = await getWorkList()
  const about = await getAbout()
  const skills = await getSkillList()

  return (
    <main className="container max-w-4xl pb-16 space-y-10">
      <div>
        <Date />
      </div>
      <div>
        <Profile profile={about} />
      </div>
      <div>
        <About content={about.content} />
      </div>
      <div>
        <Skills skills={skills} />
      </div>
      <div>
        <Works works={works} />
      </div>
    </main>
  )
}
