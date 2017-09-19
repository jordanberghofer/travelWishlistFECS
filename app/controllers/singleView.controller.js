"use strict";

app.controller("singleViewCtrl", function($scope, singleViewFact, $routeParams, $location){
    console.log("singleViewCtrl is registered");

    $scope.wishlist = {

        name: "",
        country: "",
        description: "",
        id: "",
        image: "",
        tripName: "",
        planeCost: "",
        hotelCost: "",
        foodCost: "",
        passport: "",
        notes: "",
        
    };

    const showSingDest = function(){
        singleViewFact.getSingDest($routeParams.id)
            .then(data => {
                console.log("showSingDest data", data);
                $scope.wishlist = data;
                $scope.wishlist.id = $routeParams.id;
            });
    };

    $scope.submitEdit = function(){
        console.log("$routeParams.id, $scope.wishlist", $routeParams.id, $scope.wishlist);
        singleViewFact.editWish($routeParams.id, $scope.wishlist)
            .then((data) => { 
                $location.path('/savedDest');
    });
    };
    showSingDest();

});