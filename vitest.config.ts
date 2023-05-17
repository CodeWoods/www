/// <reference types="vitest" />
// import { getViteConfig } from 'astro/config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'c8',
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70
    },
    include: ['**/*.test.ts']
  }
})
