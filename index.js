//Code your solution in this file
function findMatching(drivers, string) {
  const people = drivers.filter(driver => driver.toUpperCase() == string.toUpperCase())
  return people;
}

function fuzzyMatch(drivers, string) {
  const people = drivers.filter(drivers => drivers.slice(0, string.length) == string);
  return people;
}

function matchName(drivers, string) {
  const people = drivers.filter(drivers => drivers.name == string)
  return people;
}


// Another way to do the Lab

//
// function findMatching(drivers, string) {
//  return drivers.filter(function(driver) {return driver.toUpperCase() === string.toUpperCase()});
// }
//
// function fuzzyMatch(drivers, string) {
//   return drivers.filter(function(driver){
//     if (driver.slice(0, string.length) === string) {
//         return driver;
//       }
// });
// }
//
// function matchName (drivers, string) {
//   return drivers.filter(function(driver) {
//     for (const key in driver) {
//       if (driver[key] === string) {
//         return driver
//       }
//     }
//   });
//
// }
