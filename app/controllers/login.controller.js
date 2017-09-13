"use strict";

app.controller("loginCtrl", function($scope, $window, loginFact, $location){
    console.log("loginCtrl is registered");

    const sco = $scope;

    sco.account = {};

    sco.register = function(){
        loginFact.register({
            email: sco.account.email,
            password: sco.account.password
        })
        .then(userData => {
            sco.logIn();
        })
        .catch(error => console.log("Log In Error", error));
    };

    sco.logIn = () => loginFact.logIn(sco.account)
        .then( () => {
            $window.location.href = '#!/home';
            // sco.$apply;
        });

    sco.logInGoogle = function(){
        loginFact.authWithProvider()
            .then(result => {
                let user = result.user.uid;
                $location.path('/home');
                sco.$apply();
            })
            .catch(error => console.log("Google Login Error", error.message, error.code));
    };
});