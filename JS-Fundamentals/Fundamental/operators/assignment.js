/**
 * Assignment operator
 * =, +=, -=, *=, /=
 */

// Use Case 1: Basic
let a = 1
// Use Case 2: Chaining
let x = y = 1
console.log(x)
console.log(y)

// Use Case 3: +=
let start = 5
for (let i = 1; i <= 5; i++) {
   // start = start + i
    start += i
    console.log(start)
}
