'use strict';

refugeeAnswers.controller('CategorizeQuestionController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
  	$scope.$parent.main.title = "";
  	var questionId = $routeParams.questionId;
  	var modelData = window.modelData; 
  	$scope.main = {};
  	$scope.main.question = modelData.questionModel(questionId);
  	$scope.main.question.user = modelData.userModel($scope.main.question.askedBy);
  	$scope.main.category = "";
  }]);