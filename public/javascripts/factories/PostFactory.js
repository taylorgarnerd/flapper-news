angular.module('flapperNews')
  .factory('PostFactory', function PostFactory () {
    var exports = {};

    exports.posts = [];

    return exports;
  });
