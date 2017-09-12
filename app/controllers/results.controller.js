"use strict";

// app.controller("resultsCtrl", function($scope, resultsFact){
//     console.log("resultsCtrl is registered");
// });

app.controller("resultsCtrl", function($scope, resultsFact, searchFact){
    console.log("resultsCtrl is registered");

    $scope.searchText = searchFact;

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