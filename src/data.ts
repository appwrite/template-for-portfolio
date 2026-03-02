import type { ReactNode } from 'react'

export const navItems: Array<{
  label: string
  href: string
  type?: 'button' | 'link'
}> = [
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'About me',
    href: '/#about',
  },
  {
    label: 'Contact me',
    href: '/contact',
    type: 'button',
  },
]

export const experiences: Array<{
  title: string
  company: string
  years: string
  description: ReactNode
}> = [
  {
    title: 'Founder & CEO',
    company: 'TechVantage Solutions',
    years: '2020-Present',
    description:
      'As Founder and CEO, I launched an AI productivity tool, growing it to 500,000 users in three years. I secured $2M in seed funding and built a 20+ member cross-functional team.',
  },
  {
    title: 'Co-Founder',
    company: 'InnoNext Ventures',
    years: '2017-2019',
    description:
      'I co-founded InnoNext Ventures, developing a SaaS CRM platform that boosted user retention by 70%. I managed the product lifecycle from concept to launch using agile methodologies.',
  },
  {
    title: 'Product Manager',
    company: 'SwiftData Analytics',
    years: '2015-2017',
    description:
      'As Product Manager, I led the development of a data visualization platform, increasing enterprise adoption by 30%. I conducted market research to inform new features.',
  },
]
