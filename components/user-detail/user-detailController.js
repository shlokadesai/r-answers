'use strict';

refugeeAnswers.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    console.log('UserDetail of ', userId);

    console.log('window.refugeeAnswers.userModel($routeParams.userId)',
        window.refugeeAnswers.userModel(userId));

  }]);
