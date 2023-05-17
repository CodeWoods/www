import { rehypePlugins, remarkPlugins } from './plugins'

export const MARKDOWN_CONFIG = {
  syntaxHighlight: false,
  remarkRehype: {
    // clobberPrefix: 'footnote-'
    // footnoteLabel: 'Footnotes'
  },
  remarkPlugins,
  rehypePlugins
}
