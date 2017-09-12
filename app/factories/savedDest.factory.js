"use strict";

app.factory("savedDestFact", function($q, $http){
    console.log("savedDestFact is registered");

    // const url = FBCreds.databaseURL;
    // console.log("FBCreds.databaseURL", FBCreds.databaseURL);

    // const makeDestArray = function(data){
    //     console.log("obj in makeDestArray", makeDestArray);
    //     console.log(data.data.destinations);

    //     return Object.keys(data.data).map(key => data.data[key]);
    // };

    // const getDestinations = function(){
    //     console.log("getDestinations");
    //     return $q((resolve,reject) => {
    //         $http.get(`${url}/destinations.json`)
    //         .then(data => resolve(makeDestArray(data)))
    //         .catch(error => reject (error));
    //     });
    // };
    // return {getDestinations};
});