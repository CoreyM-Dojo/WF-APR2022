// Data Types
var string = "Hello"; // Strings have quotes 
var alsoString = '21'

var num = 34 // This is a number

var bool = true // This is a boolean


// Variables 
var firstname,
    lastname,
    num1,
    birthday,
    isHungry,
    num2

// Strings (String)
firstname = "Corey"
lastname = "Mckeel"



// Numbers (Integer)
num1 = 10
num2 = 5
// Booleans (Boolean)
isHungry = true
// Operators ( +, -, *, /)
var sum = num1 + num2
sum -= 5 // sum = sum + 5
sum++ // sum = sum + 1
// console.log(sum)
// Logical Operators

// && and logical operator
// || or logical operator

// Concatenation & Interpolation
// var fullname = firstname + " " + num2 + num1
function getFullName(fname, lname) {
    return `${fname} ${lname}`;
}

fullname = getFullName(firstname, lastname);
console.log(fullname);

// Functions
function add(num1, num2) {
    console.log(num1 + num2)
    return num1 - num2
}



console.log(add(30,20))
add(20,10)
add(25,30)

