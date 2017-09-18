"use strict";

app.factory("loginFact", function($q, $http){
    // console.log("loginFact is registered");
    
    let currentUser = null;

    const provider = new firebase.auth.GoogleAuthProvider();

    const isAuthenticated = function(){
        return new Promise ((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if (user){
                    currentUser = user.uid;
                    resolve(true);
                }else{
                    reject(false);
                }
            });
        });
    };

    const getCurrentUser = function(){
        return currentUser;
    };

    const logIn = function(user){
        console.log("user logged in");
        return firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password);
    };

    const logOut = function(){
        console.log("user logged out");
        return firebase.auth().signOut();
    };

    const register = function(user){
        return firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password);
    };

    const authWithProvider = function(){
        return firebase.auth().signInWithPopup(provider);
    };

    return {
        getCurrentUser,
        logIn,
        logOut,
        register,
        isAuthenticated,
        authWithProvider        
    };

});