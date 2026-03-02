import type { ReactNode } from 'react'

export const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-fit rounded-md border border-neutral-700 px-1.5 py-0.5 font-medium text-sm text-white">
      {children}
    </div>
  )
}
