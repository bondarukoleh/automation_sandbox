import {Page, Locator} from "@playwright/test";
import {ButtonElement} from "../elements";

class HeaderFragment {
  page: Page;
  testUserButton: ButtonElement;
  addCreditsButton: ButtonElement;
  logoutButton: ButtonElement;
  userGreetText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.testUserButton = new ButtonElement(page, 'nav >> text=Test User')
    // this.addCreditsButton = new ButtonElement(page, 'nav >> text=Add credits')
    // this.testUserButton = new ButtonElement(page, 'nav >> text=Logout')
    this.userGreetText = this.page.locator('nav >> ul[class^="NavItems_NavItems"]')
  }
}

export {HeaderFragment}
