"use strict"

/** 
 * Formatting String Using Template Literals
 * Examples
 * ABC Bank Statment from 2022-01-01 to 2022-02-01 for account ending 12345
 * 
 */

// Example 1:
let stDt = "2022-01-01"
let endDt = "2022-02-01"
let acNum = 12345

let emailSub = `ABC Bank Statment from ${stDt} to ${endDt} for account ending ${acNum}`
console.log(emailSub);