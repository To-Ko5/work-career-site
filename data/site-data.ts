import { BookText } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import type { url_link } from '@/types/data'

export const site = {
  title: 'Portfolio',
  description: 'TK Portfolio Site'
}

export const date = {
  lastUpdatedAt: new Date()
}

export const urlLinks: url_link[] = [
  {
    icon: SiGithub,
    href: process.env.LINK_URL_1 || '#',
    tooltip: 'Github'
  },
  { icon: BookText, href: process.env.LINK_URL_2 || '#', tooltip: 'Qiita' }
]
