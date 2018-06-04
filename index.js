// Code your solution in this file

// function  findMatching(drivers, name) {
//   const newArr = [];
//
//   for (const driver of drivers ) {
//
//     if (driver.toLowerCase() === name.toLowerCase() ){
//       newArr.push(name)
//     }
//   }
//       return newArr
//
// }

function findMatching(array, name) {
  return array.filter( function (driver) { return driver.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(array, str) {
  return array.filter( function (driver) { return driver.slice(0,2) == str})
}

function matchName(array, str) {
  return array.filter( function (driver) {return driver['name'] == str;});
}
