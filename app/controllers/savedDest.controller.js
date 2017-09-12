"use strict";

app.controller("savedDestCtrl", function($scope, savedDestFact){
    console.log("savedDestCtrl is registered");

    // const showDestinations = function(){
    //     savedDestFact.getDestinations()
    //         .then(data => {
    //             console.log("data has been fetched", data);
    //             $scope.dest = data;
    //         })
    //         .catch(error => console.log(error));
    // };
    // showDestinations();
});