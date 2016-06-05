describe('ArticleService', function() {
  beforeEach(module('newsSummaryApp'));

  var ArticleService, httpBackend;

  var guardianResponseData = {
    data: {
      response: {
        status: "ok",
        results: [{
          webTitle: "Poll gives Brexit campaign three percentage points lead",
          webPublicationDate: "2016-06-04T21:23:51Z",
          fields: {
            headline: "Poll gives Brexit campaign three percentage points lead",
            trailText: "Opinium survey also shows extent of age and class divisions between leave and remain camps",
            thumbnail: "https://media.guim.co.uk/ffd24d7a177d54266c42f075427d37b35ee958f6/0_141_2800_1680/500.jpg"
          },
          webUrl: "https://www.theguardian.com/politics/2016/jun/04/poll-eu-brexit-lead-opinium",
          sectionName: "Politics"
        }]
      }
    }
  }

  beforeEach(inject(function(_ArticleService_, _ArticleFactory_, $httpBackend) {
    ArticleService = _ArticleService_;
    ArticleFactory = _ArticleFactory_;
    httpBackend = $httpBackend;
  }));

  // it('makes a new array of articles using data from the guardian api', function(){

  //   httpBackend.expectGET('http://www.test.com').respond(guardianResponseData);

  //   expect(ArticleService.getArticlesData('http://www.test.com')).toEqual([new ArticleFactory('Poll gives Brexit campaign three percentage points lead')]);

  //   httpBackend.flush();
  // });
});
