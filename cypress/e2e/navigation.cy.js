describe('Navigation & Header', () => {
  beforeEach(() => { 
    cy.visit('/');
    cy.wait(2000); // Wait for potential popups to load
  });

  it('1. Logo redirects to home', () => { cy.get('a[href="/"]').first().click(); cy.url().should('eq', Cypress.config().baseUrl + '/'); });
  it('2. SHOP link is present', () => { cy.contains('SHOP').should('be.visible'); });
  it('3. OUR STORY page loads', () => { cy.contains('Our Story').click(); cy.wait(3000); cy.url().should('include', '/our-cocoa-story'); });
  it('4. ETHICAL SOURCING page loads', () => { cy.contains('Ethical Sourcing').click(); cy.wait(3000); cy.url().should('include', 'ethicalsourcing'); });
  it('5. AVAILABLE WORLDWIDE link exists', () => { cy.contains('Available Worldwide').should('exist'); });
  it('6. Account icon exists', () => { cy.get('a[href*="/customer_authentication"]').should('exist'); });
  it('7. Store Locator input exists', () => { cy.contains('Find A Store').click(); cy.get('input').should('exist'); });
  it('8. Cart icon exists', () => { cy.get('button[title="Open My Bag"]').should('exist'); });
  it('9. Region selector shows US', () => { cy.contains('UNITED STATES').should('be.visible'); });
  it('10. Mega Menu categories navigate', () => {
    const categories = ['Chocolate', 'Cups', 'Gummies', 'Bundles', 'Milk'];
    categories.forEach(cat => {
      cy.navigateToCategory(cat);
      cy.wait(2000); // Wait for navigation
      cy.url().should('include', `/collections/${cat.toLowerCase()}`);
      cy.visit('/');
    })
});
});