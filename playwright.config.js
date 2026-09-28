// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/playwright',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  timeout: 30000,

  reporter: [
    ['list'],
    ['json', { outputFile: 'tests/test-results/results.json' }],
    ['html', { outputFolder: 'tests/test-results/html-report', open: 'never' }],
  ],

  use: {
    baseURL: 'https://testsheepnz.github.io/BasicCalculator.html',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'off',
    actionTimeout: 10000,
    navigationTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
