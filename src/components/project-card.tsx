import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '~/content'

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      key={project.title}
      href={`/projects/${project.slug}`}
      className="relative rounded-2xl border border-white/8 bg-neutral-850 p-4"
    >
      <div className="mb-4">
        <span className="font-medium text-white">{project.title}</span>
        <p className="line-clamp-1">{project.summary}</p>
      </div>
      <Image
        src={project.image}
        alt={project.title}
        width={1000}
        height={700}
        className="aspect-5/3 rounded-2xl"
      />
    </Link>
  )
}
