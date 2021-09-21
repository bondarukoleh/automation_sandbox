describe('Alias and invoke', () => {
  it('Calculate total of normal and sale products', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.thumbnail').as('productThumbnail');
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text());
    // });
    cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice');
    cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

    let itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
      let itemsPriceTotal = 0;
      // @ts-ignore
      const itemPrice = $linkText.split('$');
      let i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log('Non sale price items total: ' + itemsPriceTotal);
    });

    cy.get('@saleItemPrice').then($linkText => {
      let saleItemsPrice = 0;
      // @ts-ignore
      const saleItemPrice = $linkText.split('$');
      let i;
      for (i = 0; i < saleItemPrice.length; i++) {
        cy.log(saleItemPrice[i]);
        saleItemsPrice += Number(saleItemPrice[i]);
      }
      itemsTotal += saleItemsPrice;
      cy.log('Sale price items total: ' + saleItemsPrice);
    })
      .then(() => {
        cy.log('The total price of all products: ' + itemsTotal);
        expect(itemsTotal).to.equal(616.7);
      });
  });
});
