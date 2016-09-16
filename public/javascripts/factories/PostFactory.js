angular.module('flapperNews')
  .factory('PostFactory', ['$http', 'AuthFactory', function PostFactory ($http, AuthFactory) {
    var exports = {};

    exports.posts = [];

    exports.getAll = function() {
      return $http.get('/posts').success(function(data) {
        angular.copy(data, exports.posts);
      });
    };

    exports.create = function(post) {
      return $http.post('/posts', post, {
        headers: {Authorization: 'Bearer'+ AuthFactory.getToken()}
      }).success(function(data) {
        exports.posts.push(data);
      });
    };

    exports.upvote = function(post) {
      return $http.put('/posts/' + post._id + '/upvote', null, {
        headers: {Authorization: 'Bearer' + AuthFactory.getToken()}
      }).success(function(data) {
        post.upvotes += 1;
      });
    };

    exports.get = function(id) {
      return $http.get('/posts/' + id).then(function(res) {
        return res.data;
      });
    };

    exports.addComment = function(id, comment) {
      return $http.post('/posts/' + id + '/comments', comment, {
        headers: {Authorization: 'Bearer' + AuthFactory.getToken()}
      });
    };

    exports.upvoteComment = function(post, comment) {
      return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote', null, {
        headers: {Authorization: 'Bearer' + AuthFactory.getToken()}
      }).success(function(data) {
        comment.upvotes += 1;
      });
    };

    return exports;
  }]);
