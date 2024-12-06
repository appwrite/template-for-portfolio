import type { ReactNode } from 'react'
import { Footer } from '~/components/footer'

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  )
}
