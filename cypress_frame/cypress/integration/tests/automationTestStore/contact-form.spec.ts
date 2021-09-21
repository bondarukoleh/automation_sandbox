describe(`Test contact us form`, () => {
  it('should be able to submit', function() {
    const {automationTestStore} = this.urls;
    const {firstName, email, comments} = this.userData;

    cy.visit(automationTestStore);
    cy.get('ul.info_links_footer a[href$=contact]').click()
    cy.get('#ContactUsFrm_first_name').type(firstName);
    cy.get('#ContactUsFrm_email').type(email);
    cy.get('#ContactUsFrm_enquiry').type(comments);
    cy.get('button').contains('Submit').click();
    cy.get('.contentpanel').should(el => {
      expect(el[0].innerText).contains('Your enquiry has been successfully')
    });
    cy.title().as('pageTitle').should('equal', 'Contact Us')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.url().should('include', 'contact')
    // @ts-ignore
    cy.get('@pageTitle').then(v => cy.log(v))
  });

  it('should NOT be able to submit, fields are required', function() {
    const {webDriverUniversity: {host, paths: {contactUs}}} = this.urls;

    cy.visit(`${host}${contactUs}`);
    cy.get('[type="submit"]').click();
    cy.get('body').should('contain.text', 'Error: all fields are required');
  });
});
