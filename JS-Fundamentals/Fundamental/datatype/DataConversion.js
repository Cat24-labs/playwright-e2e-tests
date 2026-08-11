let val1 = "5"
let val2 = "5.8"

console.log(`The type of val1 is: ${typeof val1}`); //string
console.log(`The type of val2 is: ${typeof val2}`); //string

//Converting string to number
// numVal1 = parseInt(val1)  //5
// numVal2 = parseFloat(val2)  //5.8

//Unary Number
numVal1 = +val1  //5   
numVal2 = +val2  //5.8 

console.log(`The type of numVal1 is: ${typeof numVal1}, and the value is: ${numVal1}`); //number
console.log(`The type of numVal2 is: ${typeof numVal2}, and the value is: ${numVal2}`); //number

//Converting number to string
let strVal = numVal1.toString();  //5

console.log(`The type of strVal is: ${typeof strVal}, and the value is: ${strVal}`); //string