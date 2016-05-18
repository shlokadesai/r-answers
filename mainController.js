'use strict';

var refugeeAnswers = angular.module('refugeeAnswers', ['ngRoute', 'ngMaterial']);

refugeeAnswers.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home-page', {
                templateUrl: 'components/home-page/home-pageTemplate.html',
                controller: 'HomePageController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController'
            }).
            otherwise({
                redirectTo: '/home-page'
            });
    }]);

refugeeAnswers.controller('MainController', ['$scope',
    function ($scope) {
        $scope.main = {};
        $scope.main.title = 'Users';
    }]);
