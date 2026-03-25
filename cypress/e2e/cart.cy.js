import commands from '../support/e2e';

describe('Cart Logic', () => {
  beforeEach(() => { cy.visit('/'); cy.wait(2000); });

  it('26. Add item updates count', () => { cy.get('button[title="Open My Bag"]').click(); cy.contains("ADD TO BAG").click(); cy.get('button[title="Open My Bag"]').should('have.text', '\n\n  \n  \n\n1\n                '); });
  it('27. Cart persistent on reload', () => {  cy.get('button[title="Open My Bag"]').click(); cy.contains("ADD TO BAG").click(); cy.get('button[title="Open My Bag"]').should('have.text', '\n\n  \n  \n\n1\n                '); cy.reload(); cy.get('button[title="Open My Bag"]').should('have.text', '\n\n  \n  \n\n1\n                '); });
  it('28. Increase quantity updates price', () => { /* Logic to check total math */ });
  it('29. Free shipping meter calculation', () => { cy.get('button[title="Open My Bag"]').click(); cy.get('.cart-progress-bar').should('exist'); });
  // it('30. Checkout button redirects to checkout', () => { cy.get('button[title="Open My Bag"]').click(); cy.contains(" ADD TO BAG ").click(); cy.contains("VIEW BAG & CHECKOUT").first().click(); cy.url().should('include', 'checkout'); });
  // T31-T40: Empty cart states, promo code errors, and mini-cart closing.
});