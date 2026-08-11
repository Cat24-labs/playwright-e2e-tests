"user strict";

/**
 * Anonymous function (function expression)
 * @scenario
 * 1. function (without name is assigned to variable)
 * 2. function with name is assigned to variable
 * 
 * @usage
 * In callback context (a function requires another function at its argument)
 * 
 */

// 1. function (without name is assigned to variable)
//  let addTwoNum = function (num1, num2) {
//     let sum = num1 + num2
//     return sum
// }

// console.log(typeof addTwoNum);
// let val = addTwoNum(2,2)
// console.log(val);

// 2. function with name is assigned to variable
let sumFn = function addTwoNum (num1, num2) {
    let sum = num1 + num2
    return sum
}

//addTwoNum(2,2)
let val = sumFn(2,2)
console.log(val);