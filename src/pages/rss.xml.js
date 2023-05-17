import rss from '@astrojs/rss'
import { getSortedCollectionPosts } from '~/utils/fetchPosts'
import { parseRFC2822 } from '~/utils/getFormattedDate'
import { DOMAIN, RSS_LANG } from '../config'

export async function get(context) {
  const sortedPosts = await getSortedCollectionPosts({ collection: 'pages' })

  const rssItems = sortedPosts.map((post) => {
    const title = post.data.title
    const pubDate = parseRFC2822(post.data.pubDateTime)
    // const description = post.data.description
    const link = `${post.slug.split('/').pop()}`

    return {
      title,
      pubDate,
      // description,
      link
    }
  })

  return rss({
    title: DOMAIN,
    description: 'Hi there!',
    site: context.site?.toString() ?? '',
    items: rssItems,
    customData: `<language>${RSS_LANG}</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    // Custom stylesheet for browser-based viewing of RSS
    stylesheet: 'assets/rss.xsl'
  })
}
