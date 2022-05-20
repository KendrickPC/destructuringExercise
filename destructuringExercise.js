// Destructuring Exercise

// Object Destructuring 1
// What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;
console.log('\nObject Destructuring 1:')
console.log(numPlanets); // 8;
console.log(yearNeptuneDiscovered); // 1846;

// Object Destructuring 2
// What does the following code return/print?
let planetFacts = {
  numPlanets2: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};
let {numPlanets2, ...discoveryYears} = planetFacts;
console.log('\nObject Destructuring 2:')
console.log(discoveryYears); 
// {yearsNeptuneDiscovered: 1846, yearsMarsDiscovered: 1659}

// Object Destructuring 3
// What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
console.log('\nObject Destructuring 3:')
console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"}))
// 'Your name is Alejandro and you like purple';
console.log(getUserData({firstName: "Melissa"})) 
// 'Your name is Melissa and you like green'
console.log(getUserData({})) 
// 'Your name is undefined and you like green'

// Array Destructuring 1
// What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log('\nArray Destructuring 1')
console.log(first); 
// "Maya"
console.log(second); 
// "Marisa"
console.log(third); 
// "Chi"

// Array Destructuring 2
// What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
];
console.log('\nArray Destructuring 2')
console.log(raindrops); 
// "Raindrops on roses"
console.log(whiskers);
// "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); 
/*
  [ 
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
*/

// Array Destructuring 3
// What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log('\nArray Destructuring 3')
console.log(numbers) 
// [10, 30, 20]

// ES2015 Refactoring
// In this exercise, you’ll refactor some ES5 code into ES2015.
// ES5 Assigning Variables to Object Properties
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
const {numbers: {a, b}} = obj;
// var b = obj.numbers.b;
console.log('\nES2015 Object Destructuring')
console.log(a);
console.log(b);

// ES5 Array Swap
/*
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
*/

// ES2015 One-Line Array Swap with Destructuring
/* Write an ES2015 Version */
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log('\nES2015 One-Line Array Swap with Destructuring')
console.log(arr);

// raceResults()
// Write a function called raceResults which accepts a single array
// argument. It should return an object with the keys first, second,
// third, and rest.

/*
first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array
*/
const raceResults = (arr) => {
  const [first, second, third, ...rest] = arr;
  return {
    first,
    second,
    third,
    rest,
  }
}
console.log('\nraceResults()');
console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
