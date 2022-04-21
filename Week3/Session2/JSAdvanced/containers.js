// Arrays

var array = [] // empty array

var array2 = [1,2,3,4,5] // [i0,i1,i2,i3,i4]

console.log(array2[0]) // print to the console the value at index 0 --> 1

var fruits = ["apple", "banana", "cherry", "plum", "oranges"] // What if I want to change one of these values?
console.log("old",fruits);
// Lets change plum to grapes

fruits[3] = "grapes"
console.log("new",fruits)

// What if I decided to add plum back but I wanted to keep grapes as well?

// Array.push()
fruits.push('plum');

// Lets say I changed my mind, I dont want plum in my list

// Array.pop() --> returns the removed value
fruits.pop(); // Pop does not take any arguments and only removes the last value in the array

// Find all manner of other built in js functions for arrays at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Objects

var obj = {} // empty object

var obj2 = {key:"value", key2:10, key3: false, key4:function name(params) {
    console.log("the value of this key is a function")
}}

// Lets print one of the values to the console
console.log(obj2['key']) // the key must be in the form of a string
console.log(obj2.key2) // Also a valid way to access an object

// Lets change the value at the key of 'key'
obj2.key = "new value";
console.log(obj2['key']) // the key must be in the form of a string

// lets add another key to the object
obj2['key5'] = new Date() // if the key does not exist, it will create a new one
console.log(obj2.key5)

// Lets just get rid of that now shall we?
delete obj2.key5
console.log(obj2.key5)

// Find all manner of other built in js functions for objects at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object







