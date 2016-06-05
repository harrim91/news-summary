newsSummaryApp.service('ArticleService', ['$http', 'ArticleFactory', function($http, ArticleFactory) {

  var self = this;

  self.getArticlesData = function(apiUrl, service, apiRequestUrl) {
    var articles = [];
    _getArticlesFromAPI(articles, apiUrl, service, apiRequestUrl);
    return articles;
  };

  function _getArticlesFromAPI(articles, apiUrl, service, apiRequestUrl) {
    $http({
      url: apiUrl+service,
      method: 'GET',
      params: {apiRequestUrl: apiRequestUrl}
    })
      .then(function(response) {
        _handleResponse(response.data, articles);
      });
  };

  function _handleResponse(data, articles) {
    data.response.results.forEach(function(result) {
      articles.push(new ArticleFactory(result.fields.headline, result.fields.thumbnail));
    });
  }
}]);
