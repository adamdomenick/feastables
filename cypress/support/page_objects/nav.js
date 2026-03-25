export class Navigation {
  get shopLink() { return cy.get('a').contains(/shop/i); }
  get cartIcon() { return cy.get('a[href*="/cart"]'); }
  get footerEmail() { return cy.get('input[type="email"]'); }
}
export const nav = new Navigation();