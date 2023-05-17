import { expect, test } from '@playwright/test'

// https://github.com/alex-grover/alexgrover.me/blob/main/tests/sitemap.test.ts
test('sitemap', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('link[rel="sitemap"]')).toHaveAttribute('href', '/sitemap.xml')
})
