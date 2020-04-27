// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  let newArr = drivers.slice(0, 2);
  return newArr;
};

const returnLastTwoDrivers = (drivers) => {
  let newArr = drivers.slice(-2);
  return newArr;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}

const fareDoubler = function (fare) {
  return createFareMultiplier(fare)(2);
};

const fareTripler = function (fare) {
  return createFareMultiplier(fare)(3);
};

const selectDifferentDrivers = function (drivers, selectingDrivers) {
  return selectingDrivers(drivers);
};
