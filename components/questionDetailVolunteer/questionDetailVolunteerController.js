'use strict';

refugeeAnswers.controller('QuestionDetailVolunteerController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
  	$scope.$parent.main.title = "";
  	var questionId = $routeParams.questionId;
  	var modelData = window.modelData; 
  	$scope.main = {};
  	$scope.main.question = modelData.questionModel(questionId);
  	$scope.main.question.askedBy = modelData.userModel($scope.main.question.askedBy);
  	$scope.main.question.answeredBy = modelData.userModel($scope.main.question.answeredBy);
  	$scope.main.category = "";
  }]);