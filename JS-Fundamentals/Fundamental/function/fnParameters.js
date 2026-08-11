"user strict";

/**
 * Function Parameter
 * 
 * @scenario
 * 1. Default params
 * 2. Passing undefined/any falsy values if not known
 * 3. Passing primitives, object types as args
 * 
 */

// 1. Default params
// function greet(name, greeting = "Hello"){
//     console.log(`${greeting}, ${name}!`);
// }
// greet("Rob", "Hi")

// 2. Passing undefined/any falsy values if not known
// function printfullname(fname, mname, lname){
//     console.log(`The full name given as: ${fname} ${mname} ${lname}`)
//     if(mname){
//         console.log(`The full name given as: ${fname} ${mname} ${lname}`)
//     }else {
//         console.log(`The full name given as: ${fname} ${lname}`)
//     }
// }
// printfullname("Brent", "", "Hunter")


// 3. Passing primitives, object types as args
function printfullname(personObj){
    console.log(`${personObj.firstname} ${personObj.lastname}`);
}

printfullname({
    firstname: "Brent",
    lastname: "Hunter",
})
