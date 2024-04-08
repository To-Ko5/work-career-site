import { LucideIcon } from 'lucide-react'
import { IconType } from '@icons-pack/react-simple-icons'

export type work = {
  case: number
  title: string
  startDate: string
  endDate: string
  positions: string[]
  skills: string[]
  tools: string[]
  description: string
}

export type about = {
  name: string
  position: string
  content: string
}

export type url_link = {
  icon: LucideIcon | IconType
  href: string
  tooltip?: string
}
