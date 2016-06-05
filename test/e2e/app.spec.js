describe('app', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('should get home page title', function() {
    expect(browser.getTitle()).toEqual('News Summary');
  });

  it('should have a heading', function() {
    expect($$('.header h1').getText()).toMatch('News');
  });
});
