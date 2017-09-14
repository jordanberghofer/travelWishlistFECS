"use strict";

// app.controller("resultsCtrl", function($scope, resultsFact){
//     console.log("resultsCtrl is registered");
// });

app.controller("resultsCtrl", function($scope, resultsFact, searchFact, quizFact){
    console.log("resultsCtrl is registered");

    $scope.searchText = searchFact;
    $scope.quiz = quizFact;
    console.log("corh", $scope.quiz);
    // $scope.norf = quizFact.norf;
    // $scope.morh = quizFact.morh;
    // $scope.uorr = quizFact.uorr;
    // $scope.dors = quizFact.dors;    


    const showDestinations = function(){
        resultsFact.getDestinations()
            .then(data => {
                console.log("data has been fetched", data);
                $scope.pants = data;
            })
            .catch(error => console.log(error));
    };
    showDestinations();
});