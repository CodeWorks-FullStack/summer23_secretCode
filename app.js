// NOTE groups all console logs together, ends on 130

console.group('examples')


console.log('Hello! Javascript is working')


// SECTION strings

// NOTE do not use var, it is forbidden black magic
// var badThing = ''

let firstName = 'Jeremy'

const lastName = 'Fowler'

firstName = 'Big Jerms'

let fullName = firstName + ' ' + lastName

console.log(`This is the full name: ${fullName}`);

let stringWithQuotes = "Isn't this cool"

let stringWithDoubleQuotes = `"I'm really smart" said Savannah`


// SECTION booleans

let isJeremyCool = false

let isSavannahSleepy = true

isSavannahSleepy = false

if (isSavannahSleepy) {
  console.log('Someone get her some coffee')
}
else {
  console.log('Someone get her a rice krispy');
}

// SECTION number

let number = 3

let negativeNumber = -3

let summedNumber = number + negativeNumber

let complicatedNumber = (4 + 4) * (75 / 5)

console.log('This is the complicated number: ' + complicatedNumber);


// NOTE does not change the value of number
number + 1

number += 1

number = number + 1

number++

console.log(number);

// SECTION objects

// NOTE bad
// let catName = 'Gopher'

// let catAge = 2

// let catIsHungry = true

let isHungry = true


let cat = {
  name: 'Gopher',
  age: 2,
  isHungry: true,
  favoriteToys: {
    thisIsWeird: {
      thisIsCrazy: [
        'You did it!'
      ]
    }
  }
}


console.log(cat.favoriteToys.thisIsWeird.thisIsCrazy[0]);


// SECTION arrays

let breakfastItems = ['apple', 'bagel', 'nothing', 'rice krispies']

let numbers = [1, 2, 3, 100000000, -300, number]

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

let nothing = null

// NOTE undefined
let thing;


// SECTION functions

function sayHello() {
  console.log("Hello everybody, I'm a function and I love all of you! 💘");
}

sayHello()

console.groupEnd()

const secretCode = '🧀🥯🥓🥑☕'

let userInput = ''

// ✅ get a console log of the avocado emoji
// store an avocado emoji somewhere
// console log of the emoji stored within js

function selectAvocado() {
  userInput += '🥑'
  logUserInput()

  let secretCodeElement = document.getElementById('secretCode')
  console.log('secret code element:', secretCodeElement);
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

function selectFood(food) {
  userInput += food
  logUserInput()
  let secretCodeElement = document.getElementById('secretCode')
  console.log('secret code element:', secretCodeElement);
  secretCodeElement.innerText = userInput
}


function checkSecretCode() {
  if (userInput != secretCode) {
    window.alert('You are so dumb, that is not the secret code')
    return
  }

  window.alert('You guessed the secret code!');

  const imageElement = document.getElementById('secretImage')

  // @ts-ignore
  imageElement.src = 'https://images.unsplash.com/photo-1684561607487-565ddc54d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

}