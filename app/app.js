"use strict";

const app = angular.module("planet", ["ngRoute"]);

const isAuth = (loginFact) => loginFact.isAuthenticated();

app.config($routeProvider => {

    $routeProvider
        .when('/', {
            templateUrl: '/partials/contents/login.html',
            controller: 'loginCtrl'
        })
        .when('/home', {
            templateUrl: '/partials/contents/home.html',
            controller: 'homeCtrl',
            resolve: {isAuth}
        })
        .when('/quiz', {
            templateUrl: '/partials/contents/quiz.html',
            controller: 'quizCtrl',
            resolve: {isAuth}
        })
        .when('/results', {
            templateUrl: '/partials/contents/results.html',
            controller: 'resultsCtrl',
            resolve: {isAuth}
        })
        .when('/savedDest', {
            templateUrl: '/partials/contents/savedDest.html',
            controller: 'savedDestCtrl',
            resolve: {isAuth}
        })
        .when('/singleView/:id', {
            templateUrl: '/partials/contents/singleView.html',
            controller: 'singleViewCtrl',
            resolve: {isAuth}
        })
        .otherwise('/');
});

app.run(($location, FBCreds)=> firebase.initializeApp(FBCreds));
app.run(($rootScope)=> $rootScope.showSearch = false);