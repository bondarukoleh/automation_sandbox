import { test, expect } from '@playwright/test';

test.describe('Some describe to start with 2', async () => {
  test.skip('basic test 2', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await new Promise(res => setTimeout(res, 3000));
    await expect(title).toHaveText('Playwright');
  });
})
