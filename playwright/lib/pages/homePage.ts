import {Page} from "@playwright/test";
import {HeaderFragment} from '../fragments'

class HomePage {
  headerFragment: HeaderFragment;

  constructor(readonly page: Page) {
    this.headerFragment = new HeaderFragment(page)
  }
}

export {HomePage}
