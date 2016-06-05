newsSummaryApp.factory('ArticleFactory', function() {

  var NewsItem = function(headline, thumbnailUrl){
    this.headline = headline;
    this.thumbnail = thumbnailUrl || 'assets/img/news.jpg';
  };

  return NewsItem;

});