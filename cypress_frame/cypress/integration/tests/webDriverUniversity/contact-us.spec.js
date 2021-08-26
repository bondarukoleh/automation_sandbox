describe(`Test contact us form`, () => {
  it('should be able to submit', function () {
    const {webDriverUniversity: {host, paths: {contactUs}}} = this.urls;
    const {firstName, lastName, email, comments} = this.userData;

    cy.visit(`${host}${contactUs}`);
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comments);
    cy.get('[type="submit"]').click()
  });

  it.skip('should NOT be able to submit, fields are required', async () => {
    const urls = await cy.fixture('urls');
    cy.visit(urls.webDriverUniversity);
  });
})
