describe('viewing headlines', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('has ten articles', function() {
    var articlesList = $$('.articles .article');
    expect(articlesList.count()).toEqual(10);
  });
});