import { getSortedCollectionPosts, generateSitemap } from '~/utils/fetchPosts'

export async function get() {
  const posts = await getSortedCollectionPosts({ collection: 'pages' })
  const body = await generateSitemap({ posts })

  return {
    body
  }
}
