import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeHeadingsAutoLink from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
// -- Prism syntax highlighting --
import { refractor } from 'refractor/lib/all'
import rehypePrismDiff from 'rehype-prism-diff'
import rehypePrismGenerator from 'rehype-prism-plus/generator'
refractor.alias('html', ['vue', 'svelte'])
const rehypePrismPlus = rehypePrismGenerator(refractor)

export const rehypePlugins = [
  rehypeAccessibleEmojis,
  [rehypePrismPlus, { ignoreMissing: true }],
  rehypePrismDiff,
  rehypeSlug,
  // FIXME: heading-anchor
  [
    rehypeHeadingsAutoLink,
    {
      behavior: 'append',
      properties: {
        className: ['heading-anchor']
      },
      content: {
        type: 'text',
        value: '\u200B'
      },
      test: ['h2', 'h3', 'h4']
    }
  ]
]
