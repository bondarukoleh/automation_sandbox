import { test, expect } from '@playwright/test';
import { pageProvider } from '../../../lib/pages';

test.describe.only('Login @ui-test', async () => {
  test('Login user', async ({ page }) => {
    const { homePage } = pageProvider(page);

    await homePage.page.goto('/');
    await homePage.headerFragment.sighInButton.click();

    await expect(homePage.page.url()).toContain('/auth');
  });
});
