angular.module('flapperNews')
  .factory('PostFactory', ['$http', function PostFactory ($http) {
    var exports = {};

    exports.posts = [];

    exports.getAll = function() {
      return $http.get('/posts').success(function(data) {
        angular.copy(data, exports.posts);
      });
    };

    return exports;
  }]);
