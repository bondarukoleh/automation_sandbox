describe(`Test contact us form`, () => {
  before(() => {
  })

  it('should be able to submit', async () => {
    const urls = await cy.fixture('urls');
    cy.visit(urls.webDriverUniversity);
  });
})
