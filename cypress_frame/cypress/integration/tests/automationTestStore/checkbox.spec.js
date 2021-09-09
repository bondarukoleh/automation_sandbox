describe("Verify checkboxes via webdriveruni", () => {
  it("Check and validate checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    //cy.get('#checkboxes > :nth-child(1) > input').check()
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    //cy.get('@option-1').check();
    cy.get('@option-1').check().should('be.checked')
  });

  it("Uncheck and validate checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    cy.get(':nth-child(5) > input').as('option-3')
    cy.get('@option-3').uncheck().should('not.be.checked')
  });

  it("Check multiple checkboxes", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    // we can click by checkbox values
    cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
  });
})

describe("Verify radio buttons via webdriveruni", () => {
  it("Check specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    cy.get('#radio-buttons').find("[type='radio']").first().check()
    cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
  });

  it("Validate the states of specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    cy.get("[value='lettuce']").should('not.be.checked')
    cy.get("[value='pumpkin']").should('be.checked')

    cy.get("[value='lettuce']").check()
    cy.get("[value='lettuce']").should('be.checked')
    cy.get("[value='pumpkin']").should('not.be.checked')

    cy.get("[value='cabbage']").should('be.disabled')
  });
})
