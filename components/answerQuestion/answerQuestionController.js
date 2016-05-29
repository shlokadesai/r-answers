'use strict';

refugeeAnswers.controller('AnswerQuestionController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
  	var questionId = $routeParams.questionId;
  	var modelData = window.modelData; 
  	$scope.$parent.main.title = "Answer a question"; 

  	$scope.main = {};
  	$scope.main.question = modelData.questionModel(questionId);
  	$scope.main.question.user = modelData.userModel($scope.main.question.askedBy);
  	$scope.main.answer = ""; 

  }]);