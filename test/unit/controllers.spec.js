describe('NewsSummaryController', function() {
  var controller;

  beforeEach(module('newsSummaryApp'));

  beforeEach(inject(function($controller) {
    controller = $controller('NewsSummaryController');
  }));

  it('is initialized with zero articles', function() {
    expect(controller.articles.length).toEqual(0);
  })

  it('gets ten articles from an api', function() {
    setTimeout(function() {
      expect(controller.articles.length).toEqual(10);
    }, 5000);
  });
});
