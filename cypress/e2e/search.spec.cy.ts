import { generateRandomString } from "../support/homePage/ui/func";
import { searchButtonsNames } from "../fixtures/data/searchCard";

describe('Search by categories', () => {
  const typingText= generateRandomString();
  searchButtonsNames.map(buttonName=>
    {
    it(`search in ${buttonName} button`, () => {
      cy.search(buttonName, typingText)
      .checkSearchResult(typingText)
    });
    }  
    )
});