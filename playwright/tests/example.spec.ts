import { test, expect } from '@playwright/test';

test.describe('Some describe to start with', async () => {
  test.beforeAll(async () => console.log('Hello from beforeAll'));
  test.afterAll(async () => console.log('Hello from afterAll'));
  test.beforeEach(async () => console.log('Hello from beforeEach'));
  test.afterEach(async () => console.log('Hello from afterEach'));

  test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await new Promise(res => setTimeout(res, 3000));
    await expect(title).toHaveText('Playwright');
  });
})
