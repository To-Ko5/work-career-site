import 'server-only'
import { createClient } from 'newt-client-js'
import type { work, about } from '@/types/data'
import { cache } from 'react'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn'
})

export const getWorkList = cache(async () => {
  const { items } = await client.getContents<work>({
    appUid: 'document-site',
    modelUid: 'work2',
    query: {
      order: ['case']
    }
  })
  return items
})

export const getWorkDetail = cache(async (id: string) => {
  const items = await client.getFirstContent<work>({
    appUid: 'document-site',
    modelUid: 'work',
    query: {
      case: id
    }
  })
  return items
})

export const getAbout = async () => {
  const { items } = await client.getContents<about>({
    appUid: 'document-site',
    modelUid: 'about2',
    query: {
      select: ['name', 'position', 'content']
    }
  })
  return items[0]
}

export const getSkillList = async () => {
  const { items } = await client.getContents<any>({
    appUid: 'document-site',
    modelUid: 'skill'
  })
  const skills = items[0].skill as string[]
  return skills
}
