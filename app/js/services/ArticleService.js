newsSummaryApp.service('ArticleService', ['$http', 'ArticleFactory', function($http, ArticleFactory) {

  var self = this;

  self.getArticlesData = function(url) {
    var articles = [];
    _getArticlesFromAPI(articles, url);
    return articles;
  };

  function _getArticlesFromAPI(articles, url) {
    $http.get(url)
      .then(function(response) {
        _handleResponse(response.data, articles);
      });
  };

  function _handleResponse(response, articles) {
    response.response.results.forEach(function(result) {
      articles.push(new ArticleFactory(result.fields.headline, result.fields.thumbnail));
    });
  }
}]);
