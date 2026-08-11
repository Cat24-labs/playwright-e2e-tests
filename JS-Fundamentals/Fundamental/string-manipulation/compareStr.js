"user strict";

/** 
 * Compare String
 * 1. Full Match
 * 2. Partial Match
 *    - includes()
 *    - startsWith()
 *    - ebndsWith()
 * 
 * @questions
 * 1. Is this a case sensitive comparison ?
 * 2. Does the string needs to be trimmed ?
 * 
 */

let filename = "invoice_123.pdf"
//let filename = " invoice_123.pdf"

// Full Match
if(filename.toUpperCase().trim() === "INVOICE_123.PDF"){
    console.log(`>> The filename matches..`);
}

// Partial comparison
if(filename.startsWith("invoice")){
    console.log(`>> Yes it starts with invoice..`);
}

if(filename.endsWith(".pdf")){
    console.log(`>> Yes it starts with .pdf..`);
}