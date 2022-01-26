import { test } from '@playwright/test';

test.describe('API tests @tryOuts', function () {
  test.skip(_ => true);
  test('get something', async ({ request }) => {
    const response = await request.get(`/api/current_user`);
    console.log(response.status)
    console.log(await response.text())
  });
});

test.describe('API context tests @tryOuts', function () {
  test.skip(_ => true);
  let apiContext;

  test.beforeAll(async ({ playwright }) => {
    console.log('before all context tests');
    apiContext = await playwright.request.newContext({
      // All requests we send go to this API endpoint.
      baseURL: 'https://gorest.co.in',
      // extraHTTPHeaders: {
        // We set this header per GitHub guidelines.
        // 'SpecificHeader': 'someValue',
        // Add authorization token to all requests.
        // Assuming personal access token available in the environment.
        // 'Authorization': `token ...`,
      // },
    });
  })

  test.afterAll(async ({ }) => {
    // Dispose all responses.
    await apiContext.dispose();
  });


  test('request context', async () => {
    const response = await apiContext.get(`/public/v1/todos`);
    console.log(response.status())
    console.log(await response.text())
  });
});

