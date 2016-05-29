'use strict';

var refugeeAnswers = angular.module('refugeeAnswers', ['ngRoute', 'ngMaterial']);

refugeeAnswers.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/homePage', {
                templateUrl: 'components/homePage/homePageTemplate.html',
                controller: 'HomePageController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/userDetail/userDetailTemplate.html',
                controller: 'UserDetailController'
            }).
            when('/answerQuestion/:questionId', {
                templateUrl: 'components/answerQuestion/answerQuestionTemplate.html',
                controller: 'AnswerQuestionController'
            }).
            when('/answerSubmission/:category', {
                templateUrl: 'components/answerSubmission/answerSubmissionTemplate.html',
                controller: 'AnswerSubmissionController'
            }).
            when('/askQuestion', {
                templateUrl: 'components/askQuestion/askQuestionTemplate.html',
                controller: 'AskQuestionController'
            }).
            when('/browseQA', {
                templateUrl: 'components/browseQA/browseQATemplate.html',
                controller: 'BrowseQAController'
            }).
            when('/categorizeQuestion/:questionId', {
                templateUrl: 'components/categorizeQuestion/categorizeQuestionTemplate.html',
                controller: 'CategorizeQuestionController'
            }).
            when('/logIn', {
                templateUrl: 'components/logIn/logInTemplate.html',
                controller: 'LogInController'
            }).
            when('/questionSubmission', {
                templateUrl: 'components/questionSubmission/questionSubmissionTemplate.html',
                controller: 'QuestionSubmissionController'
            }).
            when('/questionDetailVolunteer/:questionId', {
                templateUrl: 'components/questionDetailVolunteer/questionDetailVolunteerTemplate.html',
                controller: 'QuestionDetailVolunteerController'
            }).
            when('/questionDetailRefugee/:questionId', {
                templateUrl: 'components/questionDetailRefugee/questionDetailRefugeeTemplate.html',
                controller: 'QuestionDetailRefugeeController'
            }).
            when('/questionSubmission', {
                templateUrl: 'components/questionSubmission/questionSubmissionTemplate.html',
                controller: 'QuestionSubmissionController'
            }).
            when('/refugeeHomepage', {
                templateUrl: 'components/refugeeHomepage/refugeeHomepageTemplate.html',
                controller: 'RefugeeHomepageController'
            }).
            when('/refugeeYourQuestions', {
                templateUrl: 'components/refugeeYourQuestions/refugeeYourQuestionsTemplate.html',
                controller: 'RefugeeYourQuestionsController'
            }).
            when('/signUp1', {
                templateUrl: 'components/signUp1/signUp1Template.html',
                controller: 'SignUp1Controller'
            }).
            when('/signUp2', {
                templateUrl: 'components/signUp2/signUp2Template.html',
                controller: 'SignUp2Controller'
            }).
            when('/signUp3', {
                templateUrl: 'components/signUp3/signUp3Template.html',
                controller: 'SignUp3Controller'
            }).
            when('/signUp4', {
                templateUrl: 'components/signUp4/signUp4Template.html',
                controller: 'SignUp4Controller'
            }).
            when('/signUpSuccess', {
                templateUrl: 'components/signUpSuccess/signUpSuccessTemplate.html',
                controller: 'SignUpSuccessController'
            }).
            when('/volunteerAllQuestions', {
                templateUrl: 'components/volunteerAllQuestions/volunteerAllQuestionsTemplate.html',
                controller: 'VolunteerAllQuestionsController'
            }).
            when('/volunteerHomepage', {
                templateUrl: 'components/volunteerHomePage/volunteerHomepageTemplate.html',
                controller: 'VolunteerHomepageController'
            }).
            when('/volunteerQsForYou', {
                templateUrl: 'components/volunteerQsForYou/volunteerQsForYouTemplate.html',
                controller: 'VolunteerQsForYouController'
            }).
            when('/volunteerQuestions/:type', {
                templateUrl: 'components/volunteerQuestions/volunteerQuestionsTemplate.html',
                controller: 'VolunteerQuestionsController'
            }).
            otherwise({
                redirectTo: '/homePage'
            });
    }]);



refugeeAnswers.config(function($mdThemingProvider) {
  var cyanTheme;

    cyanTheme = $mdThemingProvider.extendPalette('cyan', {
        
        'contrastDefaultColor': 'light'
    });

  $mdThemingProvider.definePalette('cyanTheme', cyanTheme);
  $mdThemingProvider.theme('default')
    .primaryPalette('cyanTheme')
    .accentPalette('yellow');
    //.backgroundPalette('cyanTheme', {'default': '200'});
});

refugeeAnswers.controller('MainController', ['$scope',
    function ($scope) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.backButton = false; 
        
    }]);
