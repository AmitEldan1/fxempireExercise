import './e2e';

declare global {
    namespace Cypress {
      interface Chainable {
        clickElement(locator: string): Chainable<JQuery<HTMLElement>>
        search(buttonName: string, typingText: string): Chainable<JQuery<HTMLElement>>
        checkSearchResult(typingText: string): Chainable<JQuery<HTMLElement>>
        checkNavigationBar(NavigationData: NavigationData): Chainable<JQuery<HTMLElement>>
        getTopArticlesHomepage(): Chainable<JQuery<HTMLElement>>
        checkTopArticlesHomepageDataByApi(): Chainable<JQuery<HTMLElement>>
      }
    }
  }