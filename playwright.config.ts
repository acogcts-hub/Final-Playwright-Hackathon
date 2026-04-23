import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // testDir: Directory where test files are located. Default is './tests'.
  testDir: './tests',
  // fullyParallel: Run tests in files in parallel. Set to true for faster execution.
  fullyParallel: true,
  // forbidOnly: Fail the build if test.only is left in code. Useful in CI.
  forbidOnly: !!process.env.CI,
  // retries: Number of retries on failure. Set higher on CI for flakiness.
  retries: process.env.CI ? 2 : 0,
  // workers: Number of parallel worker processes. Undefined uses default (number of CPUs).
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    //added the below command for allure reports 
    //and also added the allure-playwright dependency in package.json
    ['allure-playwright'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    // launchOptions: {
    //   args: ['--start-maximized'], // For Chromium-based browsers
    // },
    // viewport: null, // Disables Playwright's default 1280x720 viewport

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    // screenshot: Capture screenshots. Options: 'on', 'off', 'only-on-failure'. Uncomment to enable.
    // screenshot: 'only-on-failure',

    // video: Record videos. Options: 'on', 'off', 'retain-on-failure'. Uncomment to enable.
    // video: 'retain-on-failure',

    // actionTimeout: Timeout for actions like click, fill in ms. Default 0 (no timeout).
    // actionTimeout: 10000,

    // navigationTimeout: Timeout for page navigation in ms. Default 30000.
    // navigationTimeout: 30000,

    // expect: Settings for expect assertions, e.g., timeout for expect.toBeVisible().
    // expect: { timeout: 5000 },

    // headless: Run browser in headless mode. Default true. Set false for debugging.
    // headless: true,

    // slowMo: Slow down actions by ms. Useful for debugging slow interactions.
    // slowMo: 1000,

    // ignoreHTTPSErrors: Ignore HTTPS errors. Useful for self-signed certificates.
    // ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. Uncomment to enable mobile testing. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. Uncomment to test specific channels. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',  // Command to start the server
  //   url: 'http://localhost:3000',  // URL to wait for before starting tests
  //   reuseExistingServer: !process.env.CI,  // Reuse server if already running (not in CI)
  //   timeout: 120000,  // Timeout in ms for server to start
  // },
});
