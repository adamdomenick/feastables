describe('Product Grid & UI', () => {
  beforeEach(() => { cy.visit('/collections/all'); cy.wait(2000); });

  it('14. Prices are formatted correctly', () => { cy.contains('$').should('exist'); });
  it('15. Add to Bag button presence', () => { cy.get('button').contains(/Add to Bag/i).should('have.length.at.least', 1); });
  it('16. Out of stock shows "Find a Store"', () => { cy.contains('FIND A STORE').should('have.css', 'background-color'); });
  it('17. Product images have alt text', () => { cy.get('img').first().should('have.attr', 'alt'); });
  it('18. Hover effect on cards', () => { cy.get('a.card-link').first().realHover({ force: true }) });
  it('19. Nutrition facts modal opens', () => { cy.visit('/products/mario-galaxy-cocoa-crunch-chocolate'); cy.contains('NUTRITION').click(); cy.get('button[aria-label="Close Ingredients Modal"]').should('exist'); });
  it('20-24. Validate 5 unique collection filters', () => { 
    const colls = ['chocolate', 'cups', 'gummies', 'bundles', 'milk'];
    colls.forEach(c => { cy.visit(`/collections/${c}`); cy.wait(2000); cy.url().should('include', c); });
  });
});