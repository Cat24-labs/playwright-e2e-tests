/**
 * Logical Operators
 * 1. AND (&&)
 * 2. OR (||)
 * 3. NOT (!)
 * 
 * TWO MAIN PURPOSES:
 * 1. To conditional statements (eg. : if...else)
 * 2. To Have a default value
 */

// Use Case 1: AND (&&) check if given val is a text
let val = "Monday"
if (typeof val === "string" && val.length > 1) {
    console.log(`Given Value: ${val} is valid string`);
} else {
    console.log(`Given Value: ${val} is NOT valid string`);
}



// Use Case 2: OR (||) check if given day is a weekend or day
let day = "Monday"
if (day === "Saturday" || day === "Sunday") {
    console.log(`Given Day: ${day} is a weekend`);
} else {
    console.log(`Given Day: ${day} is Not a weekend`);
}



// Use Case 3: NOT (!) check if both first and last name is provided
let firstName = "John"
let lastName = ""
if (!firstName || !lastName) {
    console.log(`One of the names: ${firstName} or ${lastName} is not valid`);
}



/**
 * Logical Operators - OR (||) 
 * 
 * @use
 * To assign a default value
 */

let targetbrowser = "null"

let browser = targetbrowser || "Chrome"
console.log(`Browser: ${browser}`)