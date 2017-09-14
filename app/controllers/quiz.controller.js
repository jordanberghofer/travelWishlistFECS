"use strict";

app.controller("quizCtrl", function($scope, quizFact){
    console.log("quizCtrl is registered");

    $scope.quiz = quizFact;

});