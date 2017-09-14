"use strict";

app.controller("savedDestCtrl", function($scope, savedDestFact, $location, loginFact){
    console.log("savedDestCtrl is registered");

    const user = loginFact.getCurrentUser();

    $scope.wishlist = {
        image: "",
        name: "",
        country: "",
        cold: "",
        description: "",
        near: "",
        modern: "",
        urban: "",
        dangerous: "",
        uid: user
    };
    
    $scope.submitTask = function(){
        savedDestFact.addTask($scope.task);
            $location.url('/results');
    };
    
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