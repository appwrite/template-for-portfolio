import { allProjects } from '~/content'

export const getProjectBySlug = (slug: string) => {
  return allProjects.find((project) => project.slug === slug)
}
