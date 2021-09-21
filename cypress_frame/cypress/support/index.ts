declare global {
  namespace Cypress {
    interface Chainable {
      selectProduct(productName: string): Chainable<Element>

      webdriverUni_ContactForm_Submission(firstName: string, lastName: string, email: string, comment: string, $selector:  string, textToLocate: string): Chainable<number>

      addProductToBasket(element: JQuery<Element>): Chainable<Element>
    }
  }
}

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
require('./commands');
import 'cypress-file-upload'

before(() => {
  cy.fixture('urls.json').as('urls');
  cy.fixture('userData.json').as('userData');

  cy.server(
    {
      ignore(xhr) {
        return xhr.method === 'GET' || 'POST' && /users*/.test(xhr.url)
      },
    },
  )
})
