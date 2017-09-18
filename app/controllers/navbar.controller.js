"use strict";

app.controller("navCtrl", function($scope, $window, searchFact, loginFact){
    console.log("navCtrl is registered");

    $scope.isLoggedIn = false;

    $scope.logOut = () => loginFact.logOut();

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          $scope.isLoggedIn = true;
          $scope.$apply();
        } else {
          $scope.isLoggedIn = false;
          $window.location.href = "#!/login";
        }
    });

    console.log("$scope.searchText", $scope.searchText);

});