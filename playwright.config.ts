import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests/integration',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'html',
  use: {
    actionTimeout: 0,
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:9000',
    trace: 'on-first-retry'
  },
  projects: [
    // {
    // name: 'chromium',
    // use: {
    // ...devices['Desktop Chrome']
    // }
    // },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    // {
    // 	name: 'webkit',
    // 	use: {
    // 		...devices['Desktop Safari']
    // 	}
    // }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12']
      }
    }

    /* Test against branded browsers. */
    // {
    // name: 'Microsoft Edge',
    // use: {
    // channel: 'msedge',
    // },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  webServer: process.env.CI
    ? []
    : {
        command: 'npm run dev',
        port: 9000,
        reuseExistingServer: true
      }
}

export default config
