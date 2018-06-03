// Code your solution in this file

function findMatching(array, name) {
  const result = array.filter(function (element) { return element.toLowerCase() === name.toLowerCase(); });
  return result;
}

function fuzzyMatch(array, letter) {
  const result = array.filter(function (element) { return element[0] === letter[0]} );
  return result;
}

function matchName(object, name) {
  const result = object.filter(function (key) { return key['name'].toLowerCase() === name.toLowerCase() });
  return result;
}
