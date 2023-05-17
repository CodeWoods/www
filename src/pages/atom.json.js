import path from 'path'
import sanitizeHtml from 'sanitize-html'
import { getSortedPostsFromGlob } from '~/utils/fetchPosts'
import { parseRFC3339 } from '~/utils/getFormattedDate'
import { DOMAIN, RSS_LANG } from '../config'

export function get() {
  const BASE_URL = new URL(import.meta.env.SITE)
  const SITE_URL = BASE_URL.origin
  const JSON_FEED_URL = new URL(`/feed.json`, SITE_URL).href
  const sortedPosts = getSortedPostsFromGlob()
  const rssItems = sortedPosts.map((ele) => {
    // const RSS_ITEM_URL = `${SITE_URL}${ele.url}`
    const RSS_ITEM_URL = new URL(path.join('/', path.basename(ele.file, path.extname(ele.file))), SITE_URL)
    return {
      id: RSS_ITEM_URL,
      url: RSS_ITEM_URL,
      title: ele.frontmatter.title,
      // RFC 3339 ( 2010-02-07T14:04:00-05:00 )
      date_published: parseRFC3339(ele.frontmatter.pubDateTime),
      // 限制：1. 檔案需用`glob`擷取 2. MDX/Markdoc x
      // https://docs.astro.build/guides/markdown-content/
      content_html: sanitizeHtml(ele.compiledContent())
    }
  })

  const rss = {
    version: 'https://jsonfeed.org/version/1.1',
    title: `JSON Feed for ${DOMAIN}`,
    language: RSS_LANG,
    home_page_url: SITE_URL,
    feed_url: JSON_FEED_URL,
    items: rssItems
  }

  return {
    body: JSON.stringify(rss, null, 4)
  }
}
