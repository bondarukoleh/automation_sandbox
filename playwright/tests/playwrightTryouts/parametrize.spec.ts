import { test as baseTest } from '@playwright/test';
import {TestOptions} from '../../data/testData';

export const test = baseTest.extend<TestOptions>({
  person: 'John',
});

test.describe('Parametrized @tryOuts', async () => {
  test.skip(() => true);
  test('first parametrized test', async ({page, person}) => {
    console.log(person)
  });
})
