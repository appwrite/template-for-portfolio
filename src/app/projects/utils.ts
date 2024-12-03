import { promises as fs } from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'

export const PROJECTS_DIRECTORY = path.join(
  process.cwd(),
  'src',
  'app',
  'projects',
)

type ProjectFrontmatter = {
  title: string
  description: string
  image: string
}

const parseFrontmatter = (fileContent: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const frontmatter: ProjectFrontmatter = {
    title: '',
    description: '',
    image: '',
  }

  for (const line of frontMatterLines) {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    frontmatter[key.trim() as keyof Pick<Metadata, 'title' | 'description'>] =
      value
  }

  return {
    frontmatter,
    content,
  }
}

export const getProjects = async () => {
  const entries = await fs.readdir(PROJECTS_DIRECTORY, {
    recursive: true,
    withFileTypes: true,
  })

  const projects = entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map(async (entry) => {
      const fullPath = path.join(entry.path, entry.name)
      const fileContents = await fs.readFile(fullPath, 'utf8')
      const { frontmatter } = parseFrontmatter(fileContents)

      return {
        slug: path.relative(PROJECTS_DIRECTORY, entry.path).replace(/\\/g, '/'),
        ...frontmatter,
      }
    })

  return Promise.all(projects)
}
