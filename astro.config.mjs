import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config'
/* --- Integrations --- */
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import solid from '@astrojs/solid-js'
import astroPrefetch from '@astrojs/prefetch'
import remarkEleventyImage from 'astro-remark-eleventy-image'
/* --- Plugins --- */
import { MARKDOWN_CONFIG } from './markdown.config.js'
import { COMPRESSION_CONFIG, CUSTOM_MARKUP } from './plugins.config.js'
/* -- Configuration -- */
const env = loadEnv('', process.cwd(), ['PUBLIC', 'ASTRO'])
const SERVER_PORT = +env.ASTRO_APP_PORT || 9000
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`
const LIVE_URL = +env.PUBLIC_SITE_URL || 'https://neue.red'
const SCRIPT = process.env.npm_lifecycle_script || ''
const isBuild = SCRIPT.includes('astro build')

// https://astro.build/config
export default defineConfig({
  site: SCRIPT.includes('astro build') ? LIVE_URL : LOCALHOST_URL,
  preview: { port: SERVER_PORT },
  server: {
    port: SERVER_PORT,
    host: true,
    watch: {
      ignored: ['**/{.github,.husky,.idea,cache,dist}/**']
    }
  },
  build: { assets: '_' },

  integrations: [
    remarkEleventyImage({
      sizes: '(max-width: 710px) 95%, 700px',
      customMarkup: CUSTOM_MARKUP,
      eleventyImageConfig: {
        formats: ['avif', 'webp', 'jpeg'],
        widths: [480, 600],
        sharpOptions: {
          animated: false
        }
      }
    }),
    mdx(MARKDOWN_CONFIG),
    solid(),
    astroPrefetch({ throttle: 3 }),
    isBuild && compress(COMPRESSION_CONFIG)
  ],
  markdown: MARKDOWN_CONFIG,
  vite: {
    plugins: [],
    ssr: {
      external: ['@11ty/eleventy-img', 'pagefind']
    }
  }
})
