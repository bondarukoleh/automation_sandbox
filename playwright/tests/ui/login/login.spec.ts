import { test, expect } from '@playwright/test';
import {pageProvider} from "../../../lib/pages";

test.describe('Login @ui-test', async () => {
  test('Login user', async ({ page, request }) => {
    const {homePage} = pageProvider(page)

    await homePage.page.goto('/')
    await homePage.headerFragment.testUserButton.click()

    await expect(homePage.headerFragment.userGreetText).toBeVisible()
  });
})
