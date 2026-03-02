import Link, { type LinkProps } from 'next/link'
import type { ComponentPropsWithRef, ReactNode } from 'react'

import { cn } from '~/utils/cn'

type ButtonProps =
  | ({
      href?: never
      icon?: ReactNode
    } & ComponentPropsWithRef<'button'>)
  | ({
      href: string
      icon?: ReactNode
    } & ComponentPropsWithRef<'a'> &
      LinkProps<string>)

export const Button = ({
  children,
  icon,
  className,
  ...props
}: ButtonProps) => {
  if (props.href === undefined) {
    return (
      <button
        className={cn(
          'relative flex min-h-8 w-fit cursor-pointer items-center justify-center rounded-lg bg-white px-3 py-2 font-medium text-black',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <Link
      className={cn(
        'relative flex min-h-8 w-fit cursor-pointer items-center justify-center rounded-lg bg-white px-3 py-2 font-medium text-black',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
