import { Button } from './button'

export const Footer = () => {
  return (
    <div className="flex w-full flex-col border-white/8 border-t bg-linear-to-b from-[#232325]/90 to-[#19191C]">
      <div className="container flex min-h-100 grow flex-col items-center justify-center gap-8 text-center md:gap-12">
        <h2 className="text-4xl text-white md:text-7xl">Let's work together</h2>
        <Button href="/contact">Contact me</Button>
      </div>

      <footer className="border-[#2D2D31] border-t py-8 text-[#C3C3C6]">
        <div className="container mx-auto">
          Deployed by{' '}
          <a
            href="https://appwrite.io"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            Appwrite
          </a>
          . Source code available on{' '}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
