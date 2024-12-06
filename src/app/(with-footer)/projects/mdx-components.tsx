import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export const components: MDXComponents = {
  h1: (props) => <h1 className="font-medium" {...props} />,
  h2: (props) => <h2 className="font-medium" {...props} />,
  h3: (props) => <h3 className="font-medium" {...props} />,
  h4: (props) => <h4 className="font-medium" {...props} />,
  h5: (props) => <h5 className="font-medium" {...props} />,
  h6: (props) => <h6 className="font-medium" {...props} />,
  a: ({ href, children, ...props }) => {
    const className = 'text-blue-500 hover:text-blue-700'
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      )
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    )
  },
}
