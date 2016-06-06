angular.module("newsSummaryApp")
  .controller("NewsSummaryController", ['ArticleFactory', 'ArticleService', '$routeParams', function(ArticleFactory, ArticleService, $routeParams) {
    var self = this;

    var newsSummaryApiUrl = 'http://news-summary-api.herokuapp.com/'
    var guardianApiRequestUrl = 'http://content.guardianapis.com/search?show-fields=thumbnail,headline,trailText&type=article&page-size=12&section=politics'

    self.setArticles = function() {
      self.articles = ArticleService.getArticlesData(newsSummaryApiUrl, 'guardian', guardianApiRequestUrl);
    }

    self.setArticles();

    // self.currentArticle = self.articles[$routeParams.id];

  }]);
