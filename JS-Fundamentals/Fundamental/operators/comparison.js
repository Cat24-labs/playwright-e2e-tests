/** 
 * Comparison operators
 * 1. == (check only values)
 * 2. === (check values and data types)
 * 3. != (check only values)
 * 4. !== (check values and data types)
 * 5. >
 * 6. >=
 * 7. <
 * 8. <=
 * @return boolean
 * 
 * @rules
 * In most of cases, if the two operands are not of same type
 * JavaScript attempts to convert them into an appropriate type for comparison. This is called type coercion.
 * This behaviour generally results in comparing the operands numerically.
 * 
 */

// Use Case 1: Strict equality (==, === )
let a = "One" // "1"
let b = 1
console.log(a == b) // true
console.log(a === b) // false
console.log(+"One") // NaN

// Not equal

console.log(1 != 1) // false
console.log(1 != 2) // true
console.log(1 !== 1) // false
console.log(1 !== 2) // true