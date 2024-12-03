import { promises as fs } from 'node:fs'
import path from 'node:path'
import { PROJECTS_DIRECTORY } from '~/utils/content'

const projectSlugs = async (dir: string) => {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  })
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name),
      )
      return path.dirname(relativePath)
    })
    .map((slug) => slug.replace(/\\/g, '/'))
}

export default async function sitemap() {
  const slugs = await projectSlugs(PROJECTS_DIRECTORY)

  const projects = slugs.map((slug) => ({
    url: `/${slug}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ['', '/projects', '/about', '/contact'].map((route) => ({
    url: `${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...projects]
}
