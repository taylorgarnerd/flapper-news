angular.module('flapperNews')
  .controller('NavCtrl', ['$scope', 'AuthFactory', function($scope, AuthFactory) {
    $scope.isLoggedIn = AuthFactory.isLoggedIn;
    $scope.currentUser = AuthFactory.currentUser;
    $scope.logOut = AuthFactory.logOut;
  }]);
