/**
 * Standard for loop
 * Remember these points (!)
 * 1. Define the starting point
 * 2. Define the end/exist condition
 * 3. Define the increment/decrement
 */

// for (let i = 1; i <= 10; i++) {  // Incrementing the value of i by 1
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--) {  // Decrementing the value of i by 1
//     console.log(i);
// }

// Advanced use case with an Array
let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
let sum = 0;
//console.log(arr.length);  // Output: 6
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    let arrElement = arr[i];
    //console.log(arrElement);
    if (typeof arrElement === "number") {
        //sum = sum + arrElement;
        sum += arrElement;  // sum = sum + arrElement
    }
    // if (typeof arrElement !== "number") continue    // continue statement will skip the current iteration and move to the next iteration
    // sum += arrElement;  
}
console.log(`The value of sum: ${sum}`);  
