"use strict";

// app.controller("resultsCtrl", function($scope, resultsFact){
//     console.log("resultsCtrl is registered");
// });

app.controller("resultsCtrl", function($scope, resultsFact, loginFact, searchFact, quizFact, savedDestFact){
    console.log("resultsCtrl is registered");

    $scope.searchText = searchFact;
    $scope.quiz = quizFact;
    console.log("corh", $scope.quiz);
    const user = loginFact.getCurrentUser();

    $scope.dest = {};
    
    $scope.submitDest = function(dest){
        dest.uid = user;
        resultsFact.addDest(dest)
        .then(data => {
            $scope.dest.id = data.data.name;
            savedDestFact.editDest(data.data.name, $scope.dest);

        });
    };


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