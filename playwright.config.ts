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
