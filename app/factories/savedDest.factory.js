"use strict";

app.factory("savedDestFact", function($q, $http, FBCreds, loginFact){
    console.log("savedDestFact is registered");

    // const user = loginFact.getCurrentUser();
    const url = FBCreds.databaseURL;

    // const giveUgId = function(object){
    //     return Object.keys(object).map(key => {
    //         object[key].id = key;
    //         return object[key];
    //     });
    // };

    const makeSaveDestArr = function(object){
        // console.log("obj in makeSaveDestArr", makeSaveDestArr);
        // console.log(data.data.destinations);
        return Object.keys(object).map(key => {
            object[key].id = key;
            return object[key];

        });

        // let shorts =  Object.keys(data.data).map(key => data.data[key]);
        // console.log("shorts", shorts);
        
        
        // return shorts;   
    };

    const getSaveDest = function(user){
        // console.log("getDestinations");
        console.log("user",user);
        return $q((resolve,reject) => {
            $http.get(`${url}/items.json?orderBy="uid"&equalTo="${user}"`)
            .then(items => resolve(makeSaveDestArr(items.data)))
            .catch(error => reject (error));
        });
    };

    const delDest = function(id){
        console.log("delDest factory");
        return $q((resolve,reject)=>{
            $http.delete(`${url}/items/${id}.json`)
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    };

    const editDest = function(id, obj){
        return $q((resolve, reject) => {
            let newObj = angular.toJson(obj);
            $http.patch(`${url}/items/${id}.json`, newObj)
                .then(data => resolve(data))
                .catch(error => reject(error)); 
        });
    };



    return {getSaveDest, delDest, editDest};


});