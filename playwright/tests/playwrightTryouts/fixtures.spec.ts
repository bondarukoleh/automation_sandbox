import {expect, test as base} from '@playwright/test';
import {HomePage} from '../../lib/pages/homePage';

const test = base.extend<{loggedHomePage: HomePage, commonTestAction: {someData: number}}>({
  /* Seems to me too specific action to put them here */
  loggedHomePage: async ({page}, use) => {
    const homePage = new HomePage(page);
    await homePage.page.goto('/')
    await homePage.headerFragment.testUserButton.click()
    await use(homePage);
  },
  commonTestAction: async ({}, use) => {
    console.log('Doing something common but not required for all tests')
    /* It doesn't work without use function called, I guess a callback or smth */
    return use({someData: 1});
  }
});

type Account = {
  username: string;
  password: string;
};

// Note that we pass worker fixture types as a second template parameter.
export const loggedUserPerWorkerTest = base.extend<{}, { account: Account }>({
  account: [async ({ browser }, use, workerInfo) => {
    // Unique username.
    const username = 'user' + workerInfo.workerIndex;
    const password = 'verysecure';

    // Create the account with Playwright.
    const page = await browser.newPage();
    await page.goto('/signup');
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('text=Sign up').click();
    // Make sure everything is ok.
    await expect(page.locator('#result')).toHaveText('Success');
    // Do not forget to cleanup.
    await page.close();

    // Use the account value.
    await use({ username, password });
  }, { scope: 'worker' }],

  page: async ({ page, account }, use) => {
    // Sign in with our account.
    await page.goto('/signin');
    await page.locator('#username').fill(account.username);
    await page.locator('#password').fill(account.password);
    await page.locator('text=Sign in').click();
    await expect(page.locator('#userinfo')).toHaveText(account.username);

    // Use signed-in page in the test.
    await use(page);
  },
});

test.describe('Fixtures @tryOuts', async () => {
  // test.skip(() => true);
  test.skip('first fixture test', async ({loggedHomePage}) => {
    await expect(loggedHomePage.headerFragment.userGreetText).toBeVisible()
  });

  test('second fixture test', async ({commonTestAction}) => {
    console.log(commonTestAction.someData)
    expect(true).toEqual(true)
  });
})
