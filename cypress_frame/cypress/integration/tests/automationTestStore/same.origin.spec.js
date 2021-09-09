describe("Cypress web security", () => {
  it.skip("Validate visiting two different domains", () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.visit('https://www.google.com') ; // this will fail
  });

  it("Validate visiting two different domains via user actions", () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click(); // also will fail since it leads to diff domain
    // We can fix it in chrome by setting "chromeWebSecurity": false in cypress.json
  });
});
