import { test, expect, Page } from '@playwright/test';

test.describe('Share page among tests @tryOuts', async () => {
  let page: Page;
  test.skip(() => true)
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('click menu', async () => {
    await page.click('#react-burger-menu-btn');
  });

  test('close menu', async () => {
    await page.click('#react-burger-cross-btn');
  });
})

test.describe('Share state among tests @tryOuts', async () => {
  test.skip(() => true)
  const userCookiePath = 'data/dynamicUserStates/regularUserState.json'
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.click('[data-test="login-button"]');
    await page.context().storageState({ path: userCookiePath});
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.close();
  });

  test.use({storageState: userCookiePath})
  /* This tab will use cookies from beforeAll */
  test('click menu', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('#react-burger-menu-btn');
  });
})

/* haven't seen the difference between regular describe */
test.describe.serial('share tests in series @tryOuts', () => {
  test.skip(() => true)
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    // Create page once and sign in.
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.click('[data-test="login-button"]');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('click menu', async () => {
    await page.click('#react-burger-menu-btn');
  });

  test('close menu', async () => {
    await page.click('#react-burger-cross-btn');
  });
});
