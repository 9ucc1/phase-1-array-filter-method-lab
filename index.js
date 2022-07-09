// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, name){
    const matchingNames = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return matchingNames
}
function fuzzyMatch(drivers, letters){
    const fuzzyNames = drivers.filter(driver => driver.startsWith(letters))
    return fuzzyNames
}
function matchName(drivers, name){
    const matchedName = drivers.filter(driver => driver.name === name)
    return matchedName
}