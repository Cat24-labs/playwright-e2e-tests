/**
 * Use of forEach method
 * 1. It can be used to access the array's element
 * 
 * 
 */

let windows = ["Google", "Amazon", "YouTube"]
// () => {} is an arrow function
windows.forEach((val, index, array) => {
    console.log(val)
    console.log(index)
    console.log(array)
});