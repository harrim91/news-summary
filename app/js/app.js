var newsSummaryApp = angular.module("newsSummaryApp", ['ngRoute']);

newsSummaryApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'NewsSummaryController',
      templateUrl: 'views/home.html'
    })
    .when('/summary/:id', {
      controller: 'NewsSummaryController',
      templateUrl: 'views/summary.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});