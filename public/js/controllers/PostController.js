(function() {
  angular.module('ngtourist')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    // PostService.getAllPosts()
    //            .then(function(response){
    //              console.log(response);
    //            });
    // var postObj = {
    //   city: 'Gainesville, Fl',
    //   location: 'Marks Prime Rib',
    //   description: 'Stuff and things',
    //   person: 'local',
    //   catagory: 'restaurant'
    // };
    // PostService.createPost(postObj)
    //            .then(function(response){
    //              console.log(response);
    //            });
  }
}());
