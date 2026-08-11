"user strict";

/**
 * Self invoking function
 */

// (function addTwoNum (num1, num2) {
//     let sum = num1 + num2
//     console.log(sum)
//     return sum
// })(2,2)


(function greet(name, greeting = "Hello"){
    console.log(`${greeting}, ${name}!`);
})("Rob")
