import {PlaywrightTestConfig, devices, expect} from '@playwright/test';
import {TestOptions} from './data/testData'

const ON_CI = !!process.env.CI;

const config: PlaywrightTestConfig<TestOptions> = {
  globalSetup: './helpers/testSetup',
  globalTeardown: './helpers/tearDown',
  retries: ON_CI ? 2 : 0,
  // reporter: [ ['line'], ['allure-playwright'] ],
  maxFailures:  ON_CI ? 10 : undefined,
  workers: 4,
  // testMatch: 'test.list.ts',
  use: {
    baseURL: 'https://olehbondaruk-emaily-server.herokuapp.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: ON_CI,
    launchOptions: {
      slowMo: 500
    },
    person: 'Person from config'
  },
  // webServer: {
  //   command: 'cd ../../ && cd react_web_app && npm run server',
  //   port: 8080,
  //   timeout: 120 * 1000,
  //   reuseExistingServer: !process.env.CI,
  // },
  projects: [
    {
      name: 'chromium-tryouts',
      testDir: 'tests/playwrightTryouts/',
      testMatch: /.*spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        person: 'From more specific config',
      },
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

expect.extend({
  customInRangeMatcher(receivedNum: number, min: number, max: number) {
    const pass = receivedNum >= min && receivedNum <= max;
    if (pass) {
      return {
        message: () => 'passed',
        pass: true,
      };
    } else {
      return {
        message: () => 'failed',
        pass: false,
      };
    }
  },
});

export default config;
