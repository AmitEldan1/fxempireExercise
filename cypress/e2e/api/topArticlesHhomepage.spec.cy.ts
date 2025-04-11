describe('Check top articles homepage data by api', () => {
    it(``, () => {
      cy.getTopArticlesHomepage()
        .checkTopArticlesHomepageDataByApi();
    });
});