import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  // Single worker + 1 retry: corporate proxy throttles concurrent connections
  // to the external test site, causing spurious page.goto timeouts under load.
  retries: 1,
  workers: 1,
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['list'],
  ],
  use: {
    baseURL: 'https://testsheepnz.github.io/BasicCalculator.html',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  projects: [
    // Uses the system-installed Google Chrome (channel) instead of Playwright's
    // bundled Chromium, since downloading browser binaries is blocked on this
    // corporate network (TLS-inspecting proxy prevents fetching cdn.playwright.dev).
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
  ],
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e/specs',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  retries: 0,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  use: {
    baseURL: 'https://testsheepnz.github.io',
    channel: 'chrome', // installed Google Chrome
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chrome' }],
});
