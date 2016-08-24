
(function() {
  angular.module('ngtourist')
         .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseUrl = 'https://stark-fortress-54042.herokuapp.com/posts/';
    var service = {
      getAllPosts: getAllPosts,
      createPost: createPost,
    };
    function createPost(postObj){
      return $http.post(baseUrl, postObj);
    }
    function getAllPosts(){
      return $http.get(baseUrl);
    }
    return service;
  }
}());
