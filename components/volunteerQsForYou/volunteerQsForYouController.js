'use strict';

refugeeAnswers.controller('VolunteerQsForYouController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
  	// TODO change to include only questions of user 
  	// TODO add ng-click for pass 
    $scope.$parent.main.title = "Questions for you";
  	$scope.main = {}; 
  	$scope.main.numQuestions = 3; 
  	var modelData = window.modelData; 
  	$scope.main.questions = modelData.questionListModel();
  	for(var i = 0; i < $scope.main.questions.length; i++) {
  		$scope.main.questions[i].user = modelData.userModel($scope.main.questions[i].askedBy);
  	} 
  }]);