"user strict";

/**
 * Extract Substring - use of Slice Method
 * @rules
 * 1. slice method requires start(inclusive) and end index (end index is not included)
 * 2. You can specify only the start index
 * 3. You can specific the negative range
 * 
 */

/**
 * Scenario:
 * 1. Extract only yy-mm-dd format
 * 2. Extract year (4 digits) - 0 index
 * 3. Extract month - 5 index
 * 4. Extract date - 8 index
 * 
 */

let dt = "2022-02-26"

// Extract only yy-mm-dd format
let yymmdd = dt.slice(2)
console.log(yymmdd);

// Extract year (4 digits) - 0 index
let year = dt.slice(0,4)
console.log(year);

// Extract month - 5 index
let month = dt.slice(5,7)
console.log(month);

// Extract date - 8 index
//let date = dt.slice(8,10) // Option 1 : Start with postive index
//let date = dt.slice(8) // Option 2 : only Start
let date = dt.slice(-2) // Option 3 : Negative Index
console.log(date);