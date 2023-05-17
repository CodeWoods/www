// @credit: https://github.com/s3igo/blog/blob/d274e48219c676d3ea0907a8935d3d0172bd8ac7/app/src/remarkPlugins/validateFrontmatter.ts
import { frontmatterSchema as schema } from '../src/types/frontmatter'

export const validateFrontmatter = () => {
  return (_, { data }) => {
    schema.safeParse(data.astro.frontmatter)
  }
}
