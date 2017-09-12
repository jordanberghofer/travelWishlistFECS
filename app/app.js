"use strict";

const app = angular.module("planet", ["ngRoute"]);

app.config($routeProvider => {

    $routeProvider
        .when('/', {
            templateUrl: '/partials/contents/login.html',
            controller: 'loginCtrl'
        })
        .when('/home', {
            templateUrl: '/partials/contents/home.html',
            controller: 'homeCtrl'
        })
        .when('/quiz', {
            templateUrl: '/partials/contents/quiz.html',
            controller: 'quizCtrl'
        })
        .when('/results', {
            templateUrl: '/partials/contents/results.html',
            controller: 'resultsCtrl'
        })
        .when('/savedDest', {
            templateUrl: '/partials/contents/savedDest.html',
            controller: 'savedDestCtrl'
        })
        .when('/singleView', {
            templateUrl: '/partials/contents/singleView.html',
            controller: 'singleView'
        })
        .otherwise('/');
});