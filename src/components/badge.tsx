import type { ReactNode } from 'react'

export const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-3xl border border-neutral-700 px-2 py-1 text-neutral-700 text-xs">
      {children}
    </div>
  )
}
