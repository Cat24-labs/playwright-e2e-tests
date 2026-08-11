/**
 * Ternary operator (?)
 * @syntax
 * <expresion> ? "val1" : "val2"
 */

//Use Case: Set log level for different run environment

//Basic Use
let runner = "local"
// let loglevel = runner === "local" ? "Info" : "Error"
// console.log(loglevel)

//Advanced Use
let loglevel = runner === "local" ? "Info" : runner === "cloud" ? "Silent" : "Error"
console.log(loglevel)
