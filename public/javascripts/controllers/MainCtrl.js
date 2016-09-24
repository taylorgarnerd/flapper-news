angular.module('flapperNews')
  .controller('MainCtrl', function MainCtrl($scope, PostFactory, AuthFactory) {
    'use strict';

    $scope.posts = PostFactory.posts;

    $scope.isLoggedIn = AuthFactory.isLoggedIn;

    $scope.addPost = function () {
      if (!$scope.title || $scope.title === '') { return; }

      PostFactory.create({
        title: $scope.title,
        link: $scope.link
      });

      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function (post) {
      PostFactory.upvote(post);
    };
  });
