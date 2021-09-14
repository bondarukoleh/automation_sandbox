describe('Test Contact Us form via WebdriverUni', () => {
  before(function() {
    cy.fixture('userData').then(function (data) {
      // this.data = data;
      // this is JS global this reference, super anti pattern, just for example
      globalThis.data = data;
    });
  });
  it.only("Should be able to submit a successful submission via contact us form", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
    //cy.get('#contact-us').click({force: true})
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email)
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    cy.webdriverUni_ContactForm_Submission(data.firstName,
      data.lastName, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!');
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('body').contains('Error: all fields are required');
    cy.webdriverUni_ContactForm_Submission(data.first_name,
      data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
  });
});


describe("Iterate over elements", () => {
  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Log information of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });
  it("Add specific product to basket", () => {
    cy.selectProduct('Curls to straight Shampoo');
  });

  it("Add another specific product to basket", () => {
    cy.selectProduct('Seaweed Conditioner');
  });

  it("Add another specific product to basket 2", () => {
    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
  });
});

