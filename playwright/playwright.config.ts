import { PlaywrightTestConfig, devices } from '@playwright/test';

const ON_CI = !!process.env.CI;

const config: PlaywrightTestConfig = {
  globalSetup: './helpers/testSetup',
  globalTeardown: './helpers/tearDown',
  retries: ON_CI ? 2 : 0,
  // reporter: [ ['line'], ['allure-playwright'] ],
  workers: 4,
  use: {
    baseURL: 'https://olehbondaruk-emaily-server.herokuapp.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: ON_CI,
    launchOptions: {
      slowMo: 500
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Pixel_4',
    //   use: {
    //     browserName: 'chromium',
    //     ...devices['Pixel 4'],
    //     headless: false,
    //     isMobile: true
    //   },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
};

export default config;
