// Code your solution in this file
function findMatching(array, element) {
  const result =  array.filter(each => each.toLowerCase() === element.toLowerCase());
  return result;

}


function fuzzyMatch(array, str) {
  const result = array.filter(each => each.startsWith(str));
  return result;

}


function matchName(hash, str) {

  const result = hash.filter(each => each['name'] === str );
  return result;

}
