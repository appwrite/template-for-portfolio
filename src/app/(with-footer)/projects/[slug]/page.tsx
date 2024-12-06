import { MDXContent } from '@content-collections/mdx/react'
import Image from 'next/image'
import { allProjects } from '~/content'
import { components } from '../mdx-components'
import { getProjectBySlug } from '../utils'

export async function generateStaticParams() {
  return allProjects.map((post) => ({
    slug: post._meta.fileName,
  }))
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const project = getProjectBySlug((await params).slug)!

  return (
    <div className="mx-auto max-w-7xl">
      <Image
        src={project.image}
        alt={project.title}
        width={1040}
        height={585}
        className="mx-auto mt-20 w-full"
      />
      <div className="container mx-auto my-20">
        <h1 className="text-4xl">{project.title}</h1>
        <p className="font-medium text-lg">{project.summary}</p>

        <div className="grid border-white/8 border-b py-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2>Client</h2>
            {project.client}
          </div>
          <div>
            <h2>Service</h2>
            {project.service}
          </div>
          <div>
            <h2>Tools</h2>
            {project.tools.join(', ')}
          </div>
          <div>
            <h2>Year</h2>
            {project.year}
          </div>
        </div>

        <div className="prose prose-neutral prose-invert max-w-none">
          <MDXContent code={project.mdx} components={components} />
        </div>
      </div>
    </div>
  )
}
