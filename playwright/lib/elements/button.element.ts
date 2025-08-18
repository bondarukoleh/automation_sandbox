import {Page, Locator} from "@playwright/test";

class ButtonElement {
  page: Page;
  rootLocator: Locator;

  constructor(page: Page, root: string | Locator) {
    this.page = page;
    this.rootLocator = root instanceof Locator ? root : page.locator(root);
  }

  async click() {
    await this.rootLocator.click()
  }
}

export {ButtonElement}
