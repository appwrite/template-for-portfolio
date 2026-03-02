import { allProjects } from '~/content'

export default async function sitemap() {
  const projects = allProjects.map((project) => ({
    url: `/${project.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ['/', '/contact'].map((route) => ({
    url: `${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...projects]
}
