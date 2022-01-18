import {Page, Locator} from "@playwright/test";

class ButtonElement {
  page: Page;
  rootLocator: Locator;

  constructor(page: Page, root: string) {
    this.page = page;
    this.rootLocator = page.locator(root);
  }

  async click() {
    await this.rootLocator.click()
  }
}

export {ButtonElement}
