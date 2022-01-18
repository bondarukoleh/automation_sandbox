import {Page} from '@playwright/test';
import {HomePage} from './homePage'

export function pageProvider(page: Page) {
  return {
    homePage: new HomePage(page)
  }
}
