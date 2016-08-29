angular.module('flapperNews')
  .controller('PostsCtrl', function PostsCtrl ($scope, $stateParams, PostFactory) {
    'use strict';

    $scope.post = PostFactory.posts[$stateParams.id];

    $scope.addComment = function () {
      if ($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
    };
  });
