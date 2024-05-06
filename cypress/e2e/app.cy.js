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

  it('should open Emission API from home page ', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="emissions-api"').invoke('removeAttr', 'target').click();

    cy.origin('https://emissions-api.org', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message.includes('Things went bad')) {
          // we expected this error, so let's ignore it
          // and let the test continue
          return false;
        }
      });
    });
    cy.origin('https://www.emissions-api.org', () => {
      cy.url().contains('emissoins-api');
    });
  });
});
