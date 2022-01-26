import { test, expect } from '@playwright/test';

test.describe('Annotations @tryOuts', async () => {
  test.skip(() => {
    return true
  }, 'If true - describe will be skipped');

  test('skip in WebKit', async () => {
    test.skip(false, 'If true - test will be skipped');
    console.log('Some test')
  });

  test('tagged test @testTag', async () => {
    console.log('This is tagged.')
  });
})
