// @credit: https://github.com/jamband/blog/blob/main/scripts/clear.js
import { rm } from 'node:fs/promises'

await rm('.astro', { recursive: true, force: true })
await rm('.cache', { recursive: true, force: true })
await rm('coverage', { recursive: true, force: true })
await rm('dist', { recursive: true, force: true })
await rm('node_modules/.cache', { recursive: true, force: true })
await rm('node_modules/.vite', { recursive: true, force: true })
await rm('playwright-report', { recursive: true, force: true })
await rm('test-results', { recursive: true, force: true })
// 改用consola?
console.info('✅ Done!')
