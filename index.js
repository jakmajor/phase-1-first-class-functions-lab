const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let createFareMultiplier = function(i){
    return function(fare){
        return fare * i
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, callback){
    return callback(drivers);
}






/* let createFareMultiplier = function(int){
    returns fareQuad(int) {
        int * 4;
    }



    function createFareMultiplier(x) {
    return function fareMultiplier(givenValue){
         quadMulti = givenValue * 4;
         return quadMulti;
    }
}
} */