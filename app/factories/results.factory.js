"use strict";

// app.factory("resultsFact", function($q, $http){
//     console.log("resu    ltsFact is registered");
// });


app.factory("resultsFact", function($q, $http, FBCreds, loginFact){
    console.log("resultsFact is registered");

    const user = loginFact.getCurrentUser();

    const url = FBCreds.databaseURL;
    console.log("FBCreds.databaseURL", FBCreds.databaseURL);

    const makeDestArray = function(data){
        // console.log("obj in makeDestArray", makeDestArray);
        // console.log(data.data.destinations);

        let shorts =  Object.keys(data.data).map(key => data.data[key]);
        console.log("shorts", shorts);
        
        
        return shorts;   
    };

    const getDestinations = function(){
        console.log("getDestinations");
        return $q((resolve,reject) => {
            $http.get(`${url}/destinations.json`)
            .then(data => resolve(makeDestArray(data)))
            .catch(error => reject (error));
        });
    };

    const addDest = function(obj){
        console.log("obj", obj);
        let newObj = angular.toJson(obj);

        console.log("newObj", newObj);

        return $http.post(`${url}/items.json`, newObj)
            .then(data => data)
            .catch(error => console.log("error", error.message));
    };


    return {getDestinations, addDest};
});