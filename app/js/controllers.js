angular.module("newsSummaryApp")
  .controller("NewsSummaryController", ['ArticleFactory', 'ArticleService', function(ArticleFactory, ArticleService) {
    var self = this;

    var articlesUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail,headline,trailText'

    self.articles = ArticleService.getArticlesData(articlesUrl);

  }]);
