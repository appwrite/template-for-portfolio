import type { ReactNode } from 'react'

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container mt-48">{children}</div>
    </>
  )
}
