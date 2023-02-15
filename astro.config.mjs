import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';
/*--- Integrations ---*/
import prefetch from '@astrojs/prefetch';
import tailwind from '@astrojs/tailwind';
// import critters from 'astro-critters';
import compress from 'astro-compress';
// import compressor from 'astro-compressor';
/*--- Markdown plugins ---*/
// import { remarkEleventyImage } from 'astro-remark-eleventy-image';
import remarkPangu from 'remark-pangu';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
// import rehypePrettyCode from 'rehype-pretty-code';
import rehypeExternalLink from './plugins/rehype-external-link';
/*-- Configuration --*/
const env = loadEnv('', process.cwd(), ['PUBLIC', 'ASTRO']);
const SERVER_PORT = +env.ASTRO_APP_PORT || 9000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = +env.PUBLIC_SITE_URL || 'https://neue.red';
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  preview: { port: SERVER_PORT },
  server: {
    port: SERVER_PORT,
    host: true,
  },
  // TODO: 自建搜尋
  // https://github.com/QingXia-Ela/Shiina-Astro-Blog/blob/main/astro.config.mjs
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    prefetch(),
    // critters({
    // logger: 1,
    // }),
    compress({
      logger: 1,
    }),
  ],
  markdown: {
    // syntaxHighlight: false,
    remarkPlugins: [
      remarkPangu,
      // remarkEleventyImage
    ],
    // @see https://github.com/ChrisOh431/astro-remark-eleventy-image
    // remarkImages: {},
    rehypePlugins: [
      rehypeExternalLink,
      rehypeHeadingIds,
      // rehypePrettyCode,
    ],
  },
});
