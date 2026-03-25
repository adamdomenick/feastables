// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Dismiss the "Join the Crew" popup
Cypress.Commands.add('dismissPopup', () => {
  cy.get('body').then(($body) => {
    if ($body.find('button[title="Close"]')?.length > 0) {
      cy.get('button[title="Close"]').first().click();
    } else {
      cy.log('No popup found to dismiss.');
    }
  });
});

// Navigate through the Mega Menu
Cypress.Commands.add('navigateToCategory', (category) => {
  cy.get('div.layout-header-dropdown').invoke('attr', 'style', 'display: block !important');
  cy.contains('a', new RegExp(category, 'i')).click({ force: true });
});

// Custom overflow check for cards
Cypress.Commands.add('checkCardOverflow', (productName) => {
  cy.contains(productName).then(($title) => {
    cy.wrap($title).parents('a.card-link').then(($card) => {
      const cardRect = $card[0].getBoundingClientRect();
      const titleRect = $title[0].getBoundingClientRect();
      expect(titleRect.right).to.be.at.most(cardRect.right);
    });
  });
});

// Reusable overflow validator
Cypress.Commands.add('validateNoOverflow', (selector) => {
  cy.get(selector).then(($el) => {
    const rect = $el[0].getBoundingClientRect();
    const parentRect = $el.parent()[0].getBoundingClientRect();
    expect(rect.right).to.be.at.most(parentRect.right);
  });
});

// Dismiss popups
Cypress.Commands.add('clearOverlays', () => {
  cy.get('body').then(($body) => {
    if ($body.find('button[title="Close"]')?.length > 0) {
      cy.get('button[title="Close"]').first().click();
    } else {
      cy.log('No overlays found to clear.');
    }
  });
});

Cypress.Commands.add('openShopMenu', () => {
  // Bypassing the hover-state issue found earlier
  cy.get('div.layout-header-dropdown').invoke('attr', 'style', 'display: block !important');
  cy.get('div.sub-nav-wide').invoke('attr', 'style', 'display: flex !important');
});