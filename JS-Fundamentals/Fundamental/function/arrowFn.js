"user strict";

/**
 * Arrow Functions
 * 
 * @scenarios
 * 1. Convert a normal function to arrow function
 * 2. No param
 * 3. Single param
 * 4. More than one param (single and more than one statments)
 * 5. forEach() method example
 * 
 */

// 1. Convert a normal function to arrow function
// let sum = (num1, num2) => {
//     let sum = num1 + num2
//     return sum
// }
// let total = sum(2, 2)
// console.log(total);

// 2. No param
let arrowFn = () => 10 > 5
let res = arrowFn()
console.log(res);


// 3. Single param
let greet = name => console.log(`Hello, ${name}!`)
greet("Rob");

// 4. More than one param (single and more than one statments)
let sum = (num1, num2) => num1 + num2;
let total = sum(2, 2)
console.log(total);



// 5. forEach() method example
let windows = ["Google", "Amazon", "YouTube"]
// () => {} is an arrow function
windows.forEach((val, index, array) => {
    console.log(val)
    console.log(index)
    console.log(array)
});