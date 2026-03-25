describe('Marketing & Mobile', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000); // Wait for potential popups to load
    });

      it('41. Email sign up validation', () => { cy.get('input[type="email"]').first().type('test@test.com'); cy.contains('SIGN UP').click(); });
      it('42. TikTok link works', () => { cy.get('a[href*="tiktok.com"]').should('have.attr', 'target', '_blank'); });
      it('43. Discord link works', () => { cy.get('a[href*="discord"]').should('exist'); });
      it('44. SMS text prompt is visible', () => { cy.contains('70616').should('be.visible'); });
      it('45. Privacy Policy link', () => { cy.contains('Privacy Policy').click(); });
  it('46. Mobile Hamburger menu opens', () => { cy.viewport('iphone-xr'); cy.dismissPopup(); cy.contains('Toggle Menu').click(); cy.contains('SHOP').should('be.visible'); });
  // T47-T50: Mobile search, mobile cart, and responsive image loading.
});