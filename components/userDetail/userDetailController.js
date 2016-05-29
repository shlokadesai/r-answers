'use strict';

refugeeAnswers.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.$parent.main.title = "";
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    var modelData = window.modelData; 
    $scope.main = {};
    $scope.main.user = modelData.userModel(userId);
  }]);
