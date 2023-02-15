import rss from '@astrojs/rss';
import { blog } from '../lib/markdoc/frontmatter.schema';
import { readAll } from '../lib/markdoc/read';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../config';

export const get = async () => {
  const posts = await readAll({
    directory: 'blog',
    frontmatterSchema: blog,
  });

  const sortedPosts = posts
    .filter((p) => (import.meta.env.MODE !== 'production' ? true : p.frontmatter.draft !== true))
    .sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());

  let baseUrl = SITE_URL;
  // removing trailing slash if found
  // https://example.com/ => https://example.com
  baseUrl = baseUrl.replace(/\/+$/g, '');

  const rssItems = sortedPosts.map((post) => {
    if (post.frontmatter.external) {
      const title = post.frontmatter.title;
      const pubDate = post.frontmatter.date;
      const link = post.frontmatter.url;

      return {
        title,
        pubDate,
        link,
      };
    }

    const title = post.frontmatter.title;
    const pubDate = post.frontmatter.date;
    // const description = post.frontmatter.description;
    const link = `${baseUrl}/${post.slug}`;

    return {
      title,
      pubDate,
      // description,
      link,
    };
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    stylesheet: `styles/rss.xsl`,
    site: baseUrl,
    items: rssItems,
    customData: `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  });
};
