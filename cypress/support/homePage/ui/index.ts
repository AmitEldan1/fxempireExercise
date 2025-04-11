import { homePageLocators, navigationMenu, searchCard } from "../../../fixtures/locators";
import { topArticle } from "../../../fixtures/locators/homePage/topArticles";
import { NavigationData } from "../../../fixtures/types";
import { checkSearchedMainDetails, FormattedDate } from "./func";

const { searchField, openMenuButton } = homePageLocators;
const { allSearchCard, searchResults, searchButtons } = searchCard;
const { navigationButtons } = navigationMenu;
const { title: titleLocator, publishedDate: publishedDatelLocator } = topArticle;


Cypress.Commands.add('clickElement', (locator: string) => {
    cy.get(locator).click();
});

Cypress.Commands.add('search', (buttonName: string, typingText: string) => {
    cy.clickElement(searchField)
        .type(typingText)
        .get(allSearchCard)
        .find(searchButtons)
        .contains(buttonName)
        .click({ force: true })
})

Cypress.Commands.add('checkSearchResult', (typingText: string) => {
    cy.intercept('GET', '**/api/**').as('loadData')
        .wait('@loadData')
        .get(allSearchCard)
        .find(searchResults).each((result) =>
            cy.wrap(result).invoke('text').then(
                resultText => {
                    const lowercaseResultText = resultText.toLowerCase();

                    expect(lowercaseResultText).match(checkSearchedMainDetails(typingText));

                    if (typingText.includes(lowercaseResultText)) {
                        expect(lowercaseResultText).match(new RegExp(`$ | N/A`, 'i'));
                        expect(lowercaseResultText).match(new RegExp(`% | N/A`, 'i'));
                    }
                }
            ));
});


Cypress.Commands.add('checkNavigationBar', ({ title, route }: NavigationData) => {
    cy.clickElement(openMenuButton)
        .get(navigationButtons).contains(title).click()
        .url().then(url => {
            const urlTarget = url.substring(url.lastIndexOf('/') + 1)
            expect(urlTarget).equal(route);
        })

});

Cypress.Commands.add('checkTopArticlesHomepageDataByApi', () => {

    [...Array(5)].forEach((name, index) =>
        cy.get(`@apiArticle${index}`).then((apiArticle: any) => {

            const { title, articleLink, publishedDate } = apiArticle;
            const FormattedDateFromApi = FormattedDate(publishedDate);
            const finalDate = FormattedDateFromApi.split(' ').slice(0, 2).join(' ');

            cy.visit(articleLink)
                .get(titleLocator).invoke('text').should('eq', title)
                .get(publishedDatelLocator).invoke('text').should('contain', finalDate)
        }));
});