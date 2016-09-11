angular.module('flapperNews')
  .factory('PostFactory', ['$http', function PostFactory ($http) {
    var exports = {};

    exports.posts = [];

    exports.getAll = function() {
      return $http.get('/posts').success(function(data) {
        angular.copy(data, exports.posts);
      });
    };

    exports.create = function(post) {
      return $http.post('/posts', post).success(function(data) {
        exports.posts.push(data);
      });
    };

    exports.upvote = function(post) {
      return $http.put('/posts/' + post.id + '/upvote')
        .success(function(data) {
          post.upvotes += 1;
        });
    };

    return exports;
  }]);
