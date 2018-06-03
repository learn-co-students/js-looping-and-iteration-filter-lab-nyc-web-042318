// Code your solution in this file

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(list, string) {
  names = list.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
  return names
};

function fuzzyMatch(list, partialName) {
  return matches = list.filter(function (driverName) {
    return driverName.slice(0, partialName.length).match(partialName);
  });
};

function matchName(list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
};
