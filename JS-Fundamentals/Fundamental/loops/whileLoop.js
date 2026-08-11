/**
 * While Loop
 * @when to use:
 *       - Until a ccondition is met (or when the end condition is not known)
 *       - e.g. Retry until you get a response
 * Scenario:
 *    Waiting for an API response, retry max of 10 times
 */

// Syntax
// let count = 1;
// while(true) {
//     console.log(count);
//     if (count === 10) break
//     count++;
// }


// Example: Waiting for an API response, retry max of 10 times
let count = 1;
let isDatareturned = false;
while(isDatareturned === false && count <= 10) {
    console.log(count);
    if (count === 5) {
        // We got an API response
        isDatareturned = true;
    }
    count++;
}   