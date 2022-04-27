// Loops --> code with the purpose of performing an action multiple times

// For Loops --> Used when you have a good idea how many times you want an action to be performed

// Counting and printing hello to the console a set number of times
for (var i = 0; i < 10; i++) {
    console.log(i)
    console.log("Hello");
}

var array = [1,2,3,4,5,6,7]
// array.length // Arrays are also objects and one of the keys of that object is 'length'

// Looping through an array 
for (var i = 0; i < array.length; i++) {
    // We use 0 to start because arrays are 0 indexed so we want to start from teh beginning
    console.log(array[i]) // i will keep increasing each time we loop so the index you are accessing will change
} // What happens if we make the condition i <= arrayLength?

// Conditionals

var num = 10

if (num <= 10) {
    console.log("Big number")
} else {
    console.log("Not quite")
}

// Fizzbuzz -> Very popular basic algorithm

// Loop through 1 - 2000

// Print fizz to thew console if i is divisible by 3

// Print Buzz if it is divisible by 5

// Print FizzBuzz if divisible by both

// Otherwise just print the number

// for (var i = 1; i <= 2000; i++) {
//     if (i%3 == 0 && i%5 == 0) {
//         console.log("FIzzBuzz");
//     } 
//     else if (i%3 == 0) {
//         console.log("Fizz")
//     } 
//     else if (i%5 == 0) {
//         console.log("Buzz")
//     } 
//     else {
//         console.log(i)
//     }
// }

// While loops

while (true) {
    // Do something
    break
}

// Looping through arrays with for of
var colors = ["blue", "red", "green", "yellow", "purple"]

for (var color of colors) {
    console.log(color)
} // What do you think a disadvantage of this might be?

// Looping through an object
var person = {
    first_name:"Corey",
    last_name:"Mckeel",
    age: 28
}

for (var info in person ) {
    console.log(info,"-",person[info]);
}



