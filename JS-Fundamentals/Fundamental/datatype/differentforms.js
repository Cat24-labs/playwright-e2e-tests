/**
 * A data type can be represented in one of these forms:
 * 1. Literals
 * 2. Variable
 * 3. Expression
 */

//string
console.log("Hello"); //literals
let str = "Hello"; //variable
console.log(str); //variable
console.log("He" + "llo"); //Expression

//boolean
console.log(true); //literals
let bool = true; //variable
console.log(bool); //variable
console.log(10 > 5); //Expression
console.log(typeof(10 < 5)); //Expression

//Function

function sum(num1, num2){
    return num1 + num2;
}
sum(10, 20); //Expression
console.log(sum(10, 20)); //30
console.log(typeof(sum(10, 20))); //number