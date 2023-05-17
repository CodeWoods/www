// https://docs.astro.build/en/guides/content-collections/
import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean().default(true).optional(),
    title: z.string(),
    pubDateTime: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined))
  })
})

export const collections = {
  pages: blogCollection
}
