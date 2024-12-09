import { ProjectCard } from '~/components/project-card'
import { allProjects } from '~/content'

export const MoreProjects = ({
  currentProjectSlug,
}: { currentProjectSlug: string }) => {
  const projects = allProjects
    .filter((project) => project.slug !== currentProjectSlug)
    .slice(0, 3)

  if (!projects.length) return null

  return (
    <div className="border-white/8 border-t px-4 py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <h2 className="text-[1.25rem] text-neutral-primary">
          Explore more projects
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => {
            return <ProjectCard project={project} key={project.slug} />
          })}
        </div>
      </div>
    </div>
  )
}
