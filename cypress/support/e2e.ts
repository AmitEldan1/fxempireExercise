import './homePage/ui'
import'./homePage/api'

beforeEach(() => {
    cy.visit('/');
      cy.intercept('**/api/**', (req) => {
        req.continue()
  })
});