// Code your solution in this file
function findMatching(drivers, str) {
 return drivers.filter(function(x) { return x.toLowerCase() === str.toLowerCase() });
};

function fuzzyMatch(drivers, str) {
  return drivers.filter(function(x) { return x.slice(0,2) === str });
};

function matchName(drivers, str) {
  return drivers.filter(function(x) { return x['name'] === str });
};
