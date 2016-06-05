describe('ArticleFactory', function() {
  beforeEach(module('newsSummaryApp'));

  var article;

  beforeEach(inject(function(ArticleFactory) {
    article = new ArticleFactory('New Headline');
  }));

  it('has a headline', function() {
    expect(article.headline).toEqual ('New Headline');
  });

});