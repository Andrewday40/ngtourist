(function() {
  angular.module('ngtourist')
         .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'PostService'];

  function HomeController($scope, PostService){
  $scope.postData = [];
    $scope.search = search;
    function search(searchCity, searchState){
      PostService.searchForCity(searchCity, searchState)
                 .then(function(response){
                   $scope.postData = response.data;
                 });
    }
  }
}());
