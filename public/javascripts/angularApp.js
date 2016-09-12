angular.module('flapperNews', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['PostFactory', function(posts) {
            return posts.getAll();
          }]
        }
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ['$stateParams', 'PostFactory', function($stateParams, posts) {
            return posts.get($stateParams.id);
          }]
        }
      });

      $urlRouterProvider
        .otherwise('home');
  });
