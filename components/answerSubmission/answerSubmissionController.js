'use strict';

refugeeAnswers.controller('AnswerSubmissionController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
  	$scope.$parent.main.title = ""; 
  	$scope.main = {}; 
  	$scope.main.category = $routeParams.category;

  }]);