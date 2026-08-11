"user strict";

/**
 * Rest parameter and arguments object
 * 
 * @defination
 * 1. The rest params is denoted by...<paramName>
 * The rest parameter syntax allow us to represent an indefinite number of arguments as an array
 * 
 * 2. arguments object made avilable within the function body
 * 3. The arguments can be access by array by array-like notation arguments[i]
 * 4. It has a length property
 * 
 */

function sum (num1, num2, ...numN) {

let total = 0;
    //console.log(arguments);
    //console.log(arguments[2]); //3
    console.log(arguments.length);
    //let sum = num1 + num2
    //return sum
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
        return total;
}
let val = sum(2,2,3,4)
console.log(val);