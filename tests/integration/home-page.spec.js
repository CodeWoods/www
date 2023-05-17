import { test, expect } from '@playwright/test'

test('test home page basic elements', async ({ page }) => {
  // Go to http://localhost:9000/
  await page.goto('http://localhost:9000')
  await expect(page).toHaveTitle('ramblings')

  // Click h1:has-text("ramblings")
  // await page.locator('h1:has-text("ramblings")').click()

  // Click #main
  await page.locator('#main').click()

  // Click text=CC BY-NC 4.0
  await page.locator('text=CC BY-NC 4.0').click()
  await expect(page).toHaveURL('http://localhost:9000/colophon')

  // Click text=↑ Back to Top
  await page.locator('text=↑ Back to Top').click()
})
