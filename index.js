// Code your solution here
// drivers = ["a", "b", "c";]
//name "a"

//output should be ["a"]


// drivers = ["a", "a", "c";]
//name "a"

//output should be ["a", "a"]

// drivers = ["a", "a", "c";]
//name "b"

//output should be []

function findMatching(drivers, name) {
  const myDrivers = drivers.filter(function (element) {
    //input will be a single string
    //output will be a boolean
    //element is "L" name is "l"
    if (element.toUpperCase() === name.toUpperCase()) {
      return true;
    } else {
      return false;
    }

  })
  return myDrivers;
}


function fuzzyMatch(drivers, startingLetters) {
  const myDrivers = drivers.filter(function (element) {
    return element.startsWith(startingLetters)
  })
  return myDrivers;

}


const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName (drivers, name){
  const driversList = drivers.filter(function(element) {
    return name === element.name;
  })
  return driversList;
}