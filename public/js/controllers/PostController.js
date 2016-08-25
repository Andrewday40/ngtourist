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
                   $scope.post = PostService.post;
                 });
    }

    function createPost(post){
      PostService.createPost(post)
                 .then(function(response){
                   getAllPosts();
                 });
    }
  }
}());
