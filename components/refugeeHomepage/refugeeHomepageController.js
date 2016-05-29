'use strict';

refugeeAnswers.controller('RefugeeHomepageController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
  	$scope.$parent.main.title = "";
  	$scope.main.logoURL = "images/logo.png";
  }]);