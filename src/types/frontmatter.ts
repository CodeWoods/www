import { z } from 'astro/zod'

export const frontmatterSchema = z.object({
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

export type Frontmatter = z.infer<typeof frontmatterSchema>
