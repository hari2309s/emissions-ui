describe('Navigation', () => {
  it('should navigate to the home page ', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h2').contains('Emissions UI');

    cy.get('a').contains('Home');
    cy.get('a').contains('Products');
    cy.get('a').contains('Chart');
  });

  it('should navigate to the products page ', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="products"]').click();
    cy.url().should('include', '/products');

    cy.contains('Methane');
    cy.contains('Carbonmonoxide');
  });

  it('should navigate to the chart page ', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="chart"]').click();
    cy.url().should('include', '/chart');
  });
});
