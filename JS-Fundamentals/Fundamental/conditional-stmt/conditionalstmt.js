/**
 * Conditional statements Use Cases
 * 1. Just if statement
 * 
 */

//Use Case 1: Just if - handling a ramdom popup
let popupExist = true;
if (popupExist === true) console.log(`>>> Perform click action...`);
    // popupExist = false; // Close the popup


// Use Case 2: if (NOT) - Checking for falsy values
let data = ""
if (!data) throw Error (`>>> No Valid data provided...`);


// Use Case 3: if...if file exists read the file else create the file
let fileExist = "Y"
if (fileExist === "Y") {
     console.log(`>> Reading the file...`);
} else {
     console.log(`>> Creating the file...`);
}

// Use Case 4: if else if...Nested Condition...Act based on list of conditions
let err = "DataValidation"

if (err === "Error") {
    console.log(`>>> Retry...`);
} else if (err === "Assertion") {
    console.log(`>>> Fail the test...`);
}else if (err === "DataValidation") {
    console.log(`>>> Read the test data file...`);
}else {
    console.log(`>>> Print the error message...`);
}



// Use Case 5: if else (Inner conditional): Quering a database for test data
let isSuccess = true
if (isSuccess === true) {
    console.log(`>>> Storing the db values...`);
} else {
    console.log(`No data received`);
    let errCode = "ACCEPT"
    if (errCode === "ACCEPT") {
        console.log(`>>> Continue the execution...`);
    } else {
        console.log(`>>> Fail the test...`);
    }
}


// Use Case 6: if in loops
 for (let i = 0; i <= 10; i++) 
     if (i === 6){
         console.log(i);
    }
    console.log(`>>> After the loop...`);