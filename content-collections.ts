import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'

const projects = defineCollection({
  name: 'projects',
  directory: 'src/projects',
  include: '*.mdx',
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    image: z.string(),
    client: z.string(),
    service: z.string(),
    tools: z.array(z.string()),
    year: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document)
    return {
      ...document,
      slug: document._meta.path.toLowerCase().replace(/ /g, '-'),
      mdx,
    }
  },
})

export default defineConfig({
  collections: [projects],
})
