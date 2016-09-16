angular.module('flapperNews')
  .controller('PostsCtrl', function PostsCtrl ($scope, PostFactory, AuthFactory, post) {
    'use strict';

    $scope.post = post;

    $scope.isLoggedIn = AuthFactory.isLoggedIn();

    $scope.addComment = function () {
      if ($scope.body === '') { return; }

      PostFactory.addComment(post._id, {
        body: $scope.body,
        author: 'user'
      }).success(function(comment) {
        $scope.post.comments.push(comment);
      });

      $scope.body = '';
    };

    $scope.incrementUpvotes = function(comment) {
      PostFactory.upvoteComment(post, comment);
    };
  });
