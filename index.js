function findMatching(arr,filterValue) {
    return arr.filter(val => val.toLowerCase() === filterValue.toLowerCase())
}

function fuzzyMatch(arr, filterValue) {
    return arr.filter(val => val.slice(0,2) === filterValue.slice(0,2))
}

function matchName(arr, filterValue) {
    return arr.filter(val => val.name === filterValue)
}