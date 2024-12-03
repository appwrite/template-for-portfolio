import Link from 'next/link'
import { Button } from './button'
import { Marble } from './marble'

export const Header = () => {
  return (
    <header className="absolute mx-auto mt-12 flex w-full max-w-4xl animate-enter items-center justify-between rounded-2xl border border-[#2D2D31] bg-[#19191C]/90 px-6 py-4">
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
      <nav className="flex items-center gap-8 font-medium">
        <Link href="/about" className="text-white">
          About me
        </Link>
        <Link href="/projects" className="text-white">
          Projects
        </Link>
        <Button href="/contact">Contact me</Button>
      </nav>
    </header>
  )
}
