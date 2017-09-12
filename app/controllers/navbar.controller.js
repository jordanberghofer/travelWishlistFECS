"use strict";

app.controller("navCtrl", function($scope, searchFact){
    console.log("navCtrl is registered");

    $scope.searchText = searchFact;
    console.log("$scope.searchText", $scope.searchText);

});