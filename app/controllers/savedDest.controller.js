"use strict";

app.controller("savedDestCtrl", function($scope, savedDestFact, resultsFact, $location, searchFact, loginFact, quizFact){
    console.log("savedDestCtrl is registered");

    $scope.searchText = searchFact;
    $scope.quiz = quizFact;

    let uid = loginFact.getCurrentUser();

    const showSaveDest = function(){
        savedDestFact.getSaveDest(uid)
            .then(data => {
                console.log("data has been fetched", data);
                $scope.pants = data;
            })
            .catch(error => console.log(error));
    };
    showSaveDest();

    $scope.delDest = function(id){
        console.log("delDest in controller");
        savedDestFact.delDest(id)
            .then(() => showSaveDest());
    };
    

    
});