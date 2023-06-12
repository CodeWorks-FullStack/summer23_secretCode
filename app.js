// NOTE groups all console logs together, ends on 130

console.group('examples')


console.log('Hello! Javascript is working')


// SECTION strings

// NOTE do not use var, it is forbidden black magic
// var badThing = ''

// let declares a variable that's value can change
let firstName = 'Jeremy'

// const declares a variable that's value can not be changed
const lastName = 'Fowler'

// re-assigning the value of firstName
firstName = 'Big Jerms'

// string concatenation is adding two strings together
let fullName = firstName + ' ' + lastName

// string interpolation is injecting javascript into a string
console.log(`This is the full name: ${fullName}`);

let stringWithQuotes = "Isn't this cool"

let stringWithDoubleQuotes = `"I'm really smart" said Savannah`


// SECTION booleans

let isJeremyCool = false

let isSavannahSleepy = true

isSavannahSleepy = false


// evalutates if the value is true, and the console log
if (isSavannahSleepy) {
  console.log('Someone get her some coffee')
}
// runs the console log if the first if statement fails
else {
  console.log('Someone get her a rice krispy');
}

// SECTION number

let number = 3

let negativeNumber = -3

let summedNumber = number + negativeNumber

// order of operation matters (PEMDAS)
let complicatedNumber = (4 + 4) * (75 / 5)

console.log('This is the complicated number: ' + complicatedNumber);


// NOTE does not change the value of number
number + 1

// adds one to the number
number += 1

// also adds one to the number
number = number + 1

// also adds one to the number
number++

console.log(number);

// SECTION objects

// NOTE bad
// let catName = 'Gopher'

// let catAge = 2

// let catIsHungry = true

let isHungry = true


// a collection of data denoted by key:value pairs
// objects do not care about the order of their properties, only the keys where the data is stored
let cat = {
  name: 'Gopher',
  age: 2,
  isHungry: true,

  // properties can be nested
  thisIsStrange: {
    thisIsWeird: {
      thisIsCrazy: [
        'You did it!'
      ]
    }
  }
}

// must access the correct keys to pull out desired values using dot notation
console.log(cat.favoriteToys.thisIsWeird.thisIsCrazy[0]);


// SECTION arrays

// arrays are also a collection of data, but they are stored at indexes
let breakfastItems = ['apple', 'bagel', 'nothing', 'rice krispies']

// values can pulled out using bracket notation and providing an index number
let bagel = breakfastItems[1]

let numbers = [1, 2, 3, 100000000, -300, number]


// mixing data types in arrays can get you into trouble
let badThingYouShouldntDo = [
  1,
  'SUP DOGGY',
  {
    name: 'Dudley',
    color: 'Orange'
  },
  [1, 2, 3]
]


// SECTION weird stuff

// has no value
let nothing = null

// undefined, or was never given a value
let thing;


// SECTION functions

// this is the definition of what the function does
function sayHello() {
  console.log("Hello everybody, I'm a function and I love all of you! 💘");
}

// this invokes the function, and runs the code inside of the function
sayHello()

// end of console grouping
console.groupEnd()

const secretCode = '🧀🥯🥓🥑☕'

let userInput = ''

// NOTE Psuedo-code. Write out what you want your function to accomplish
// ✅ get a console log of the avocado emoji
// store an avocado emoji somewhere
// console log of the emoji stored within js

function selectAvocado() {
  userInput += '🥑'

  // call another function to run the code inside of it
  logUserInput()

  // document refers to your index.html file, and getElementById is a function used to access specific parts of the HTML
  let secretCodeElement = document.getElementById('secretCode')
  console.log('secret code element:', secretCodeElement);

  // changes the actual text content inside of the HTML element
  secretCodeElement.innerText = userInput
}

function selectCoffee() {
  userInput += '☕'
  logUserInput()
  let secretCodeElement = document.getElementById('secretCode')
  console.log('secret code element:', secretCodeElement);
  secretCodeElement.innerText = userInput
}

function selectBacon() {
  userInput += '🥓'
  logUserInput()
  let secretCodeElement = document.getElementById('secretCode')
  console.log('secret code element:', secretCodeElement);
  secretCodeElement.innerText = userInput
}

function logUserInput() {
  console.log('this is the userInput:', userInput);
}

// NOTE refactored code
// REVIEW it is okay to come back and refactor your code later


// food is a parameter. When this function is called, the value for food is supplied.
// example: selectFood('🌯')
// food's value now becomes the burrito emoji
// check the buttons in the index.html to see what arguments are being passed down here
function selectFood(food) {
  userInput += food
  logUserInput()
  let secretCodeElement = document.getElementById('secretCode')
  console.log('secret code element:', secretCodeElement);
  secretCodeElement.innerText = userInput
}


function checkSecretCode() {
  // checks the two strings stored in memory to see if they DO NOT match up
  if (userInput != secretCode) {
    // targets the web browser and opens a smaller window prompt with the supplied text
    window.alert('You are so dumb, that is not the secret code')

    // return tells the function to stop running on this line
    return
  }

  // all code past this point will only run when the 'if' statement fails

  window.alert('You guessed the secret code!');

  const imageElement = document.getElementById('secretImage')

  // sets the image element's source to the string

  // ts ignore will ignore the error that our formatter is showing. ts-ignore will always apply to the next line of code

  // @ts-ignore
  imageElement.src = 'https://images.unsplash.com/photo-1684561607487-565ddc54d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

}