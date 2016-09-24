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
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'AuthFactory', function($state, AuthFactory) {
          if(AuthFactory.isLoggedIn()) {
            $state.go('home');
          }
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'AuthFactory', function($state, AuthFactory) {
          if(AuthFactory.isLoggedIn()) {
            $state.go('home');
          }
        }]
      });

      $urlRouterProvider
        .otherwise('home');
  });
