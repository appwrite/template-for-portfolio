import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { cn } from '~/utils/cn'

export const components: MDXComponents = {
  h1: (props) => <h1 className="font-medium" {...props} />,
  h2: (props) => <h2 className="font-medium" {...props} />,
  h3: (props) => <h3 className="font-medium" {...props} />,
  h4: (props) => <h4 className="font-medium" {...props} />,
  h5: (props) => <h5 className="font-medium" {...props} />,
  h6: (props) => <h6 className="font-medium" {...props} />,
  a: ({ href, children, ...props }) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  },
  img: ({ fill = true, className, ...props }: ImageProps) => (
    <Image
      {...props}
      width={props.width || 1600}
      height={props.height || 800}
      className={cn(
        'relative m-0! overflow-hidden rounded-xl',
        'border-2 border-neutral-750',
        className,
      )}
    />
  ),
}
