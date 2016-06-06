var newsSummaryApp = angular.module("newsSummaryApp", ['ngRoute']);

newsSummaryApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/summary/:id', {
      templateUrl: 'views/summary.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});