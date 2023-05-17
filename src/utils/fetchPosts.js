/* @credit:
 * https://jeroenvanwissen.nl/blog/generate-a-simple-sitemapxml-on-your-astrobuild-website
 * https://rodneylab.com/astro-sitemaps/
 * https://github.com/JamieVaughn/blog/blob/13cdf377544def88b7514afb3b7369d691276b77/src/utils/blog.ts
 */
import { getCollection } from 'astro:content'

/* usage:
 * import { getSortedCollectionPosts } from '~/utils/fetchPosts'
 * const sortedPosts = await getSortedCollectionPosts({ collection: 'pages' })
 */
export async function getSortedCollectionPosts({ collection }) {
  const now = new Date(Date.now())

  return await getCollection(collection).then((entries) =>
    entries
      .filter((entry) => (import.meta.env.MODE !== 'production' ? true : entry.data.isDraft !== true))
      .filter((entry) => new Date(entry.data.pubDateTime) < now)
      .sort(
        (prevPost, post) => new Date(post.data.pubDateTime).valueOf() - new Date(prevPost.data.pubDateTime).valueOf()
      )
  )
}

export function getSortedPostsFromGlob() {
  const postsGlob = import.meta.glob('../content/pages/*.(md|mdoc|mdx)', {
    eager: true
  })
  const allPosts = Object.values(postsGlob)
  const now = new Date(Date.now())

  // TODO: 同時間文章排序 .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title, 'zh-TW'))
  /* eslint-disable sonarjs/prefer-immediate-return */
  const sortedPosts = allPosts
    .filter((post) => (import.meta.env.MODE !== 'production' ? true : post.frontmatter.isDraft !== true))
    .filter((post) => new Date(post.frontmatter.pubDateTime) < now)
    .sort(
      (prevPost, post) =>
        new Date(post.frontmatter.pubDateTime).valueOf() - new Date(prevPost.frontmatter.pubDateTime).valueOf()
    )
  /* eslint-enable sonarjs/prefer-immediate-return */
  return sortedPosts
}

export async function generateSitemap({ posts }) {
  const BASE_URL = new URL(import.meta.env.SITE)
  const SITE_URL = BASE_URL.origin
  const sitemapBuilder = (urldata) => `<?xml version="1.0" encoding="UTF-8" ?>
  <?xml-stylesheet href="assets/sitemap.xsl" type="text/xsl" media="screen"?>
  <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.00</priority>
  </url>
  ${urldata?.map(sitemapItem).join('')}
  </urlset>`

  // TODO: lastmod
  // https://github.com/ekalinin/sitemap.js/blob/7b0bad41d0575913cc0303914cb0ba958137f455/lib/utils.ts#L474-L485
  const sitemapItem = (item) =>
    `<url>
    <loc>${new URL(`/${item.slug}`, SITE_URL).href}</loc>
    <lastmod>${new Date(item.data.pubDateTime).toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.50</priority>
  </url>`.trim()

  return sitemapBuilder(posts)
}
