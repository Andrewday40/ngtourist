
(function() {
  angular.module('ngtourist')
         .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseUrl = 'https://stark-fortress-54042.herokuapp.com/posts/';
    var service = {
      getAllPosts: getAllPosts,
      createPost: createPost,
      updatePost: updatePost,
      deletePost: deletePost,
      searchForCity: searchForCity
    };
    function createPost(postObj){
      return $http.post(baseUrl, postObj);
    }
    function getAllPosts(){
      return $http.get(baseUrl);
    }
    function updatePost(postId, updateInfo){
      return $http.updatePost(baseurl+postId, updateInfo);
    }
    function deletePost(postId){
      return $http.delete(baseurl+postId);
    }
    function searchForCity(searchCity, searchState){
      return $http.get(baseUrl + 'city/?city='+searchCity+'&state='+searchState);
    }
    return service;
  }
}());
