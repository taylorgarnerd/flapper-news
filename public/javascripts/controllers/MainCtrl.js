angular.module('flapperNews')
  .controller('MainCtrl', function MainCtrl($scope, PostFactory) {
    'use strict';

    $scope.posts = PostFactory.posts;
    var currId = 0;

    $scope.addPost = function () {
      if (!$scope.title || $scope.title === '') { return; }

      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link,
        id: currId,
        comments: [
          {author: 'Man', body: 'I hate things!', upvotes: 0},
          {author: 'Woman', body: 'Cool!', upvotes: 12}
        ]
      });
      $scope.title = '';
      $scope.link = '';
      currId++;
    };

    $scope.incrementUpvotes = function (post) {
      post.upvotes++;
    };
  });
