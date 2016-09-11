angular.module('flapperNews')
  .controller('MainCtrl', function MainCtrl($scope, PostFactory) {
    'use strict';

    $scope.posts = PostFactory.posts;

    $scope.addPost = function () {
      if (!$scope.title || $scope.title === '') { return; }

      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link,
        comments: [
          {author: 'Man', body: 'I hate things!', upvotes: 0},
          {author: 'Woman', body: 'Cool!', upvotes: 12}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function (post) {
      post.upvotes++;
    };
  });
