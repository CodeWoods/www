import { describe, expect, it } from 'vitest'
import { ZodError } from 'astro/zod'
import { frontmatterSchema } from '../../src/types/frontmatter'

describe('Test zod validations', () => {
  it('Frontmatter測試', () => {
    expect(() =>
      frontmatterSchema.parse({
        isDraft: true,
        title: 'title',
        pubDateTime: new Date(),
        updatedDate: new Date()
      })
    ).toThrowError(ZodError)
  })
})
