"use strict";

app.factory("singleViewFact", function($q, $http, FBCreds){

    console.log("savedViewFact is registered");

    const url = FBCreds.databaseURL;

    const getSingDest = function(destId){
        console.log("destID", destId);
        return $q((resolve,reject)=> {
            $http.get(`${url}/items/${destId}.json`)
                .then(item => resolve(item.data))
                .catch(error => reject(error));
        });
    };

    const editWish = function(destId, obj) {
        return $q((resolve, reject)=>{
            let newObj = angular.toJson(obj);
            $http.patch(`${url}/items/${destId}.json`, newObj)
                .then(data=> resolve(data))
                .catch(error => reject(error));
        });
    };

    return {getSingDest, editWish}; 
});