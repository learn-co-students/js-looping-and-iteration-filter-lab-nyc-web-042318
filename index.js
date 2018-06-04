function findMatching(array, string) {
  return array.filter(function (name) { return name.toUpperCase() === string.toUpperCase(); });
}

function fuzzyMatch(array, string) {
  return array.filter(function (name) { return name.slice(0, string.length) === string; });
}

function matchName(array, string) {
  return array.filter(function (object) { return object.name === string; });
}
