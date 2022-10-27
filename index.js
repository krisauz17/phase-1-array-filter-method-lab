// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, names){
    return drivers.filter((match) => match.toLowerCase() === names.toLowerCase());
}
// const drivvers= [];
function fuzzyMatch(drivers, letters){
    return drivers.filter((match) => match.toUpperCase().indexOf(letters.toUpperCase())===0);
}
function matchName(drivers, nameMatch){
    return drivers.filter((anotherMatch)=>anotherMatch.name ===nameMatch);
}