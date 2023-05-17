import remarkCodeTitles from 'remark-flexible-code-titles'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import { validateFrontmatter } from './remark-validate-frontmatter.mjs'

export const remarkPlugins = [
  [
    remarkCodeTitles,
    {
      title: false,
      containerProperties: (lang, title) => ({
        /* eslint-disable no-useless-computed-key */
        ['data-language']: lang,
        ['data-title']: title
        /* eslint-enable no-useless-computed-key */
      })
    }
  ],
  remarkDirective,
  remarkDirectiveRehype,
  validateFrontmatter
]
