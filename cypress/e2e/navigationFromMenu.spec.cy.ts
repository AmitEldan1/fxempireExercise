import { navigationBarData } from "../fixtures/data";

describe('Navigation from main menu', () => {
  navigationBarData.map(navigationBarData => {
    it(`Navigation to ${navigationBarData}`, () => {
      cy.checkNavigationBar(navigationBarData)
    });
  }
  )
});