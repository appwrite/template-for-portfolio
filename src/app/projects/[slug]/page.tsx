import { MDXContent } from '@content-collections/mdx/react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { allProjects } from '~/content'
import { components } from '../mdx-components'
import { MoreProjects } from '../more-projects'
import { getProjectBySlug } from '../utils'

export const generateStaticParams = async () => {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

type PageParams = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug)

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      images: [
        {
          url: project.image,
          width: 2080,
          height: 1000,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function Project({ params }: PageParams) {
  const project = getProjectBySlug((await params).slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <div className="mx-auto mb-40 max-w-7xl px-4">
        <Image
          src={project.image}
          alt={project.title}
          width={2080}
          height={1000}
          className="mx-auto mt-10 w-full rounded-xl"
        />
        <div className="container mx-auto my-20">
          <div className="space-y-4">
            <h1 className="text-[2.5rem] text-neutral-primary">
              {project.title}
            </h1>
            <p className="font-medium text-[1.25rem]">{project.summary}</p>
          </div>
          <div className="my-10 grid grid-cols-1 gap-4 divide-white/8 border-white/8 border-b py-4 max-sm:divide-y md:grid-cols-2 md:divide-x md:py-8 lg:grid-cols-4">
            <div className="flex flex-col max-sm:pb-4 md:pr-10">
              <span className="text-neutral-500 text-sm">Client</span>
              <span className="text-neutral-primary text-xl">
                {project.client}
              </span>
            </div>
            <div className="flex flex-col max-sm:pb-4 md:pr-10 md:pl-5">
              <span className="text-neutral-500 text-sm">Service</span>
              <span className="text-neutral-primary text-xl">
                {project.service}
              </span>
            </div>
            <div className="flex flex-col max-sm:pb-4 md:pr-10 md:pl-5">
              <span className="text-neutral-500 text-sm">Tools</span>
              <span className="text-neutral-primary text-xl">
                {project.tools.join(', ')}
              </span>
            </div>
            <div className="flex flex-col md:pr-10 md:pl-5">
              <span className="text-neutral-500 text-sm">Year</span>
              <span className="text-neutral-primary text-xl">
                {project.year}
              </span>
            </div>
          </div>

          <div className="prose prose-neutral prose-invert! max-w-none">
            <MDXContent code={project.mdx} components={components} />
          </div>
        </div>
      </div>
      <MoreProjects currentProjectSlug={project.slug} />
    </>
  )
}
