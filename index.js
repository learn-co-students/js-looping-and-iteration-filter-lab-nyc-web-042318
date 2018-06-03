// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase();});
}

function fuzzyMatch(array, string) {
  let lengthOfString = string.length;
  return array.filter(function (driver) {return driver.slice(0, lengthOfString).toLowerCase() === string.toLowerCase();})
}

function matchName(array, string) {
  return array.filter(function (driverObj) {return driverObj.name.toLowerCase() === string.toLowerCase();});
}
