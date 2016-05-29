'use strict';

refugeeAnswers.controller('RefugeeYourQuestionsController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.$parent.main.title = "Your Questions";
  	var type = $routeParams.type;
  	
  	// TODO: get questions by type 
  	$scope.main = {}; 
  	var modelData = window.modelData; 
  	$scope.main.questions = modelData.questionListModel();
  	for(var i = 0; i < $scope.main.questions.length; i++) {
  		$scope.main.questions[i].user = modelData.userModel($scope.main.questions[i].answeredBy);
  	} 
  }]);