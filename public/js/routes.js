(function() {
  angular.module('ngtourist')
         .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'html/views/home.html',
      controller: 'HomeController'
    })
    .when('/posts', {
      templateUrl: 'html/views/post.html',
      controller: 'PostController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
}());
