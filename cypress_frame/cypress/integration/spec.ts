describe('TypeScript', () => {
  it('works', () => {
    // note TypeScript definition
    const x: number = 42
    cy.visit('www.google.com')
    expect(x).to.equal(42)
  })
})
