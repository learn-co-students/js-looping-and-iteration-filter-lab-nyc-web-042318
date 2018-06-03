// Code your solution in this file
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
