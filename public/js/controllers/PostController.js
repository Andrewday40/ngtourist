(function() {
  angular.module('ngtourist')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    getAllPosts();
    $scope.createPost = createPost;
    $scope.posts = [];

    function getAllPosts(){
      PostService.getAllPosts()
                 .then(function(){
                   $scope.posts = PostService.posts;
                 });
    }

    function createPost(posts){
      PostService.createPost(posts)
                 .then(function(response){
                   getAllPosts();
                 });
    }
  }
}());
