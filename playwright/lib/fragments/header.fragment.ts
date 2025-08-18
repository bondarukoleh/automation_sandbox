import { Page, Locator } from '@playwright/test';

class HeaderFragment {
  sighInButton: Locator;

  constructor(readonly page: Page) {
    this.sighInButton = page.getByRole('link', { name: 'Sign in' });
  }
}

export { HeaderFragment };
