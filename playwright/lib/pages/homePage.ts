import {Page} from "@playwright/test";
import {HeaderFragment} from '../fragments'

class HomePage {
  page: Page;
  headerFragment: HeaderFragment;

  constructor(page: Page) {
    this.page = page;
    this.headerFragment = new HeaderFragment(page)
  }
}

export {HomePage}
