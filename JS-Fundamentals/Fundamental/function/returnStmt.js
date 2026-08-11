"user strict";

/**
 * Return statment
 * 
 * @scenario
 * 1. Return a single primitive value
 * 2. Returns an expression [that evalutes to a value]
 * 3. Return an object type
 * 4. Return a function itself
 * 5. Return statement in conditional statement 
 */

function addTwoNum (num1, num2) {
    let sum = num1 + num2
    return {total: sum} //object type
}

// Returning a function
function addTwoNum (num1, num2) {
    return function(){
        return num1 + num2;
    }
}



function addTwoNum (num1, num2) {
    if(!num1){
        return
    }
    let sum = num1 + num2
    return sum
    }

// Calling a function
let total = addTwoNum(2,2)  // 2/undefined
console.log(total);
//console.log(total());

