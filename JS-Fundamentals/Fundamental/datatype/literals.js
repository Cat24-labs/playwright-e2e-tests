/**
 * 1. String
 * 2. number
 * 3. boolean
 * 4. Object
 * 5. Array
 * 6. Regexp
 * 7. Undefined and Null
 */


//string
let str = "Hello, World!"
let str1 = 'Hello, World!'
let str2 = `${str}, How are you?`
console.log(str2);

//number
let num = 10
let num1 = 10.5
console.log(num, num1);

//boolean
let bool =true
let bool1 = false

//object
let obj = {}

//array
let arr = []

//regexp
let reg = /abc/

//undefined and null
let val1 = undefined
let temObj= null


console.log(`The type of str is: ${typeof(str)}`);
console.log(`The type of str is: ${typeof str}`);  //typeof data operator is used to find the type of variable
console.log(`The type of number is: ${typeof num}`);
console.log(`The type of boolean is: ${typeof bool}`);
console.log(`The type of object is: ${typeof obj}`);
console.log(`The type of array is: ${typeof arr}`);
console.log(`The type of regexp is: ${typeof reg}`);
console.log(`The type of undefined is: ${typeof val1}`);
console.log(`The type of null is: ${typeof temObj}`);