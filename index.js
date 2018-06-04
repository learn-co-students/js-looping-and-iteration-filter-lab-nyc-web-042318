// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (element) {return element.toLowerCase() === string.toLowerCase(); })
}

function fuzzyMatch(array, string) {
  let a = string.length
  return array.filter(function(element) {
    return element.slice(0,a) === string;
  });
}

function matchName(array, string) {
  return array.filter(function(element) {
    return element['name'] === string
  })
}
