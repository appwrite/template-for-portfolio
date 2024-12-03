import Link from 'next/link'
import { Marble } from './marble'

const links = [
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'About me',
    href: '/about',
  },
  {
    label: 'Contact me',
    href: '/contact',
  },
]

export const Header = () => {
  return (
    <header className="mx-auto mt-12 flex max-w-4xl items-center justify-between rounded-2xl border border-[#2D2D31] bg-[#19191C]/90 px-6 py-4">
      <div className="flex gap-2">
        <Link href="/">
          <Marble />
        </Link>
        <div className="flex flex-col">
          <h1 className="font-medium text-white">Walter O'Brien</h1>
          <span className="text-[#818186] text-sm">
            Technology Entrepreneur
          </span>
        </div>
      </div>
      <nav className="flex items-center gap-8">
        {links.map((link) => {
          return (
            <Link key={link.href} href={link.href} className="text-white">
              {link.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
