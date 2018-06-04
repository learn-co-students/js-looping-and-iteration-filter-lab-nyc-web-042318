// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (names) { return names.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(array, letters) {
  return array.filter(function (name) { if (name.startsWith(letters)) {return name;} });
}

function matchName(array, driver) {
  return array.filter(function (hash) {
    return hash.name === driver;
  });
}
