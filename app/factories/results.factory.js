"use strict";

// app.factory("resultsFact", function($q, $http){
//     console.log("resu    ltsFact is registered");
// });


app.factory("resultsFact", function($q, $http, FBCreds){
    console.log("resultsFact is registered");

    const url = FBCreds.databaseURL;
    console.log("FBCreds.databaseURL", FBCreds.databaseURL);

    const makeDestArray = function(data){
        console.log("obj in makeDestArray", makeDestArray);
        console.log(data.data.destinations);

        return Object.keys(data.data).map(key => data.data[key]);
    };

    const getDestinations = function(){
        console.log("getDestinations");
        return $q((resolve,reject) => {
            $http.get(`${url}/destinations.json`)
            .then(data => resolve(makeDestArray(data)))
            .catch(error => reject (error));
        });
    };
    return {getDestinations};
});