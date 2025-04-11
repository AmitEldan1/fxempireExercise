
Cypress.Commands.add('getTopArticlesHomepage', () => {
    cy.request('GET', 'https://fxempire.com/api/v1/en/articles/latest/top-articles-homepage')
    .then(({status, body: articles}) => {
        expect(status).to.eq(200);
       // expect(articles.length).to.be.at.least(5);

        articles.slice(0, 5).forEach((article, index) => {
            const {id, title, articleLink, publishedDate} = article;
            expect(id).to.exist.and.not.be.null;
            expect(title).to.be.a('string').and.not.be.empty;
            expect(articleLink).to.be.a('string').and.include('article');
            expect(publishedDate).to.be.a('string').and.not.be.empty;
            cy.wrap(article).as(`apiArticle${index}`)
          });
      }) 
});