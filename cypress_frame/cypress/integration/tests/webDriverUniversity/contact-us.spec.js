describe(`Test contact us form`, {browser: 'chrome'}, () => {
  it.skip('should be able to submit', {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  }, function() {
    const {webDriverUniversity: {host, paths: {contactUs}}} = this.urls;
    const {firstName, lastName, email, comments} = this.userData;

    cy.visit(`${host}${contactUs}`);
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comments);
    cy.get('[type="submit"]').click();
    cy.get('#contact_reply h1').should('have.text', 'Thank You for your Message!');
  });

  it('should NOT be able to submit, fields are required', {
    browser: 'firefox', /* test will run only if tests are running with firefox browser */
  }, function() {
    if (Cypress.isBrowser('firefox')) {
      console.log('Do some specific firefox stuff')
    }
    const {webDriverUniversity: {host, paths: {contactUs}}} = this.urls;
    cy.visit(`${host}${contactUs}`);
    cy.log(Cypress.env('SOME_DEV_ENV_VAR'))
    cy.get('[type="submit"]').click();
    cy.get('body').should('contain.text', 'Error: all fields are required');
  });
});
