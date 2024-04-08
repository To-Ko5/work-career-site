import { BookText, SendHorizonal } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import type { url_link } from '@/types/data'

export const site = {
  title: 'Portfolio',
  description: 'TK Portfolio Site',
  metaTitle: 'TK Portfolio'
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
  { icon: BookText, href: process.env.LINK_URL_2 || '#', tooltip: 'Qiita' },
  {
    icon: SendHorizonal,
    href: process.env.LINK_URL_3 || '#',
    tooltip: 'Goggleフォームが開きます'
  }
]
