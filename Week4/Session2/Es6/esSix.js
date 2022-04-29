// var, let and const

// var is function scoped meaning it either exists globally or within a function only
var greeting = "Hello world"

function sayGreeting() {
    var greeting = "Goodbye world";
    console.log(greeting)
}
sayGreeting()

if (true) {
    var greeting = "Goodbye"
    console.log(greeting)
}

console.log(greeting)

// Here is the problem - What if you didn't know you already had a variable -> greeting?


// enter let

// let is block scoped -> A block is any code between {} in js
let num = 10;

if (true) {
    let num = 20
    console.log(num)
}

console.log(num)

// num only exists as 20 within the block of the conditional

// var can be redeclared and reassigned
// This can be a problem if you want to keep a specific value for reference that will never change

var constant_value = "This";

constant_value = "That";

// enter const

const CONSTANT_VALUE = "This"
console.log(CONSTANT_VALUE)
// CONSTANT_VALUE = "That" // this will throw an error

// constant values cannot be redeclared within the same scope
if (true) {
    // They can however be redeclared within a different block
    const CONSTANT_VALUE ="That";
    console.log(CONSTANT_VALUE)
}

// Notice this keeps the old value
console.log(CONSTANT_VALUE)

// const can also be used to keep reference to containers (arrays and objects);

const FRUITS = ["Blueberry", "Cherry", "Orange"];
console.log(FRUITS)
// You can change parts of the array
FRUITS[2] = "Pumpkin"
console.log(FRUITS)

// But attempting to reassign the variable itself will result in an error

// FRUITS = []; // TypeError: Assignment to constant variable.

// You also cannot redeclare within the same scope
// const FRUITS = []; // SyntaxError: Identifier 'FRUITS' has already been declared

// The same is true of objects

const USER = {
    name: "Corey",
    message: "Hi my name is " + this.name
}

console.log(USER)

//You can reassign key-value pairs
USER.message += ", I am an instructor at Coding Dojo!";
// USER = {} //  This will result in an error

// You can also add key-value pairs
USER.experience = "1.5 years : Software Deveoper"

console.log(USER); 

// The same rules apply for scope with containers

// Normal conditional

if (true) {
    // do stuff
}

// ternaries are shorthand conditionals
let isOdd = true

for (let i = 1; i <= 10; i++) {
    console.log(i)

    isOdd = (i%2 !==0)

    // condition ? if-true : if false

    // set message to either "This is odd" or "This is even" dependent on the value of the variable isOdd (Boolean)
    let message = isOdd ? "This is odd!" : "This number is even!";
    console.log(message);
}

// You can also make conditional trees

// Fizzbuzz with ternaries

function fizzBuzz() {
    for (let i = 0; i <= 255; i++) {
        (i%3 && i%5 == 0) ? console.log("FizzBuzz") 
        : (i%3 == 0) ? console.log("Fizz")
        : (i%5 == 0) ? console.log("Buzz") : console.log(i);
    } 
}

// fizzBuzz();

// Normal function

function hello() {
    console.log("Hello World!");
}

// Arrow function

const hello2 = () => {
    console.log("Hello World")
}

// Arrow functions implicitly return themselves, lets combine ternaries with arrow functions
let evenOrOdd = (num) => (num%2 == 0) ? "even" : "odd" // Chec if the number is even or odd

// BOOM! We have a one line function with value
console.log(evenOrOdd(5)) // "odd"
console.log(evenOrOdd(2)) // "even"

switch(isOdd) {
    case true:
        console.log("Its true")
    
}

const add = () => {
    console.log("add")
}

function add() {
    console.log("subtract")
}

add();







