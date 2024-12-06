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
        width={2080}
        height={1000}
        className="mx-auto mt-10 w-full rounded-xl"
      />
      <div className="container mx-auto my-20">
        <div className="space-y-4">
          <h1 className="text-[2.5rem]">{project.title}</h1>
          <p className="font-medium text-lg">{project.summary}</p>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-4 divide-x divide-white/8 border-white/8 border-b py-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col pr-10">
            <span className="text-sm">Client</span>
            <span className="text-xl">{project.client}</span>
          </div>
          <div className="flex flex-col pr-10 pl-5">
            <span className="text-sm">Service</span>
            <span className="text-xl">{project.service}</span>
          </div>
          <div className="flex flex-col pr-10 pl-5">
            <span className="text-sm">Tools</span>
            <span className="text-xl">{project.tools.join(', ')}</span>
          </div>
          <div className="flex flex-col pr-10 pl-5">
            <span className="text-sm">Year</span>
            <span className="text-xl">{project.year}</span>
          </div>
        </div>

        <div className="prose prose-neutral prose-invert max-w-none">
          <MDXContent code={project.mdx} components={components} />
        </div>
      </div>
    </div>
  )
}
