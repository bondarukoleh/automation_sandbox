import { test, expect } from '@playwright/test';

test.describe('Parallel @tryOuts', async () => {
  test.skip(() => true);
  test('first parallel test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await new Promise(res => setTimeout(res, 3000));
    console.log('this is first parallel test')
  });

  test('second parallel test, should fail', async ({page}) => {
    console.log('this is second parallel test')
    await page.goto('https://www.saucedemo.com/');
    await new Promise(res => setTimeout(res, 3000));
    expect(true).toEqual(false)
  });
})
