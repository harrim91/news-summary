describe('ArticleService', function() {
  beforeEach(module('newsSummaryApp'));

  var ArticleService, httpBackend;

  var guardianResponseData = {
    response: {
      results: [{
        fields: {
          headline: "Poll gives Brexit campaign three percentage points lead",
          thumbnail: "https://media.guim.co.uk/ffd24d7a177d54266c42f075427d37b35ee958f6/0_141_2800_1680/500.jpg"
        }
      }]
    }
  }

  beforeEach(inject(function(_ArticleService_, _ArticleFactory_, $httpBackend) {
    ArticleService = _ArticleService_;
    ArticleFactory = _ArticleFactory_;
    httpBackend = $httpBackend;
  }));

  it('makes a new array of articles using data from the guardian api', function(){

    httpBackend.expectGET('http://www.test.com/service?apiRequestUrl=params').respond(guardianResponseData);

    var expectedReturnValue = new ArticleFactory('Poll gives Brexit campaign three percentage points lead', 'https://media.guim.co.uk/ffd24d7a177d54266c42f075427d37b35ee958f6/0_141_2800_1680/500.jpg');

    var returnValue = ArticleService.getArticlesData('http://www.test.com/', 'service', 'params');
    httpBackend.flush();
    expect(returnValue).toEqual([expectedReturnValue]);

  });
});
