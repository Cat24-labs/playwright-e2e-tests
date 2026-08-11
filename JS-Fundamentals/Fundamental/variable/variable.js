
// Declare a variable 


/** *
 * Variables Rules:
 * 1. Variable names can only contain letters, numbers, underscores(_), and dollar signs($).
 * 2. System reserved keywords cannot be used e.g. if, else, throw, break.
 * 3. Variable names are case-sensitive.
 * 4. Can't have same name for others type (e.g. function name, object name)
 * 5. Multiple variables can be declared in a single line (separated by commas).
 * 6. When you just declare a variable, the data type will be undefined.
 */

let greeting = "Hello, World!" , greeting1 = "Good, Morning!"
console.log(greeting, greeting1) ;

// function greeting() {
//     //TODO
// }
//6th point:
// let greeting, greeting1
// console.log(greeting, greeting1) //undefined undefined data type

/** *
 * var, let, const use cases
 */

//let
let val = 0
//val = 10 //reassigning value is allowed
val = "Ten"
console.log("The value is:", val);

//const
const APP_URL = "https://www.google.com"
console.log(APP_URL);  

let count = 0

if(true) {
    let count = 10 //block scope
    console.log("The value of count inside if block is:", count);
}
console.log("The value of count outside if block is:", count);


