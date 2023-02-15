/// <reference types="vitest" />
// import { getViteConfig } from 'astro/config';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'c8',
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
    include: ['**/*.test.ts'],
  },
});
