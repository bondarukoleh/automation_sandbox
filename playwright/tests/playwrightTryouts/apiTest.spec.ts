import { test, expect } from '@playwright/test';

test.describe('API tests @tryOuts', function () {
  test('get something', async ({ request }) => {
    const response = await request.post(`/api/current_user`);
    console.log(response.status)
    console.log(await response.text())
  });
});
