// Code your solution in this file
function findMatching(driversArray, str) {
    let matchedArray = [];
    for (const element of driversArray) {
        element.toLowerCase() === str.toLowerCase() ? matchedArray.push(element) : false
    }
    return matchedArray;
}

function fuzzyMatch(driversArray, str) {
    let fzMatchedArray = [];

    for (const element of driversArray) [
        element.charAt(0) === str.charAt(0) ? fzMatchedArray.push(element) : false
    ]

    return fzMatchedArray;
}

function matchName(driversArray, str) {
    let matchedArray = [];

    for (const obj of driversArray) {
        console.log(obj.name === str);
        obj.name === str ? matchedArray.push(obj) : false
    }

    return matchedArray;
}