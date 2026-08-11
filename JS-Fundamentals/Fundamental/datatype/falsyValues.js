/**
 * Falsy Values:
 * 1. false
 * 2. undefined
 * 3. null
 * 4. 0
 * 5. NaN
 * 6. ""  (empty string)
 */

let val = true    //false; //undefined; //null; //0; //NaN; //"";  (empty string)

if (val) {
console.log(`Condition met...`);
}
else {
console.log(`Given ${val} is falsy value....`);
}


let val1 = 5 + undefined
console.log(val1);  //NaN

let val2 = 5 + null
console.log(val2);  //5


