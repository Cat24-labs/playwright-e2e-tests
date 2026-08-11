"user strict";

/**
 * Replace and replace all
 * @rules
 * 1. Replace method can replace a string/regexp as its first args
 * 
 * @returns
 * The modified string value
 */

/**
 * Scenario:
 * 1. Get only the filename
 * 2. Rename the file execution from .pdf to ->> .txt
 * 3. Replace table_name with Accounts
 * 4. Convert the given date format to YYMMDD format
 */

let filename = "invoice_123.pdf";
let query_template = `SELECT * FROM {{table_name}}`
let dt = "2022-01-01";

// 1. Get only the filename
let onlyfilename = filename.replace(".pdf", "")
console.log(onlyfilename); //invoice_123

// 2. Rename the file execution from .pdf to ->> .txt
let txtfile = filename.replace("pdf","txt")
console.log(txtfile);

// 3. Replace table_name with Accounts
let actualQ = query_template.replace("{{table_name}}","Accounts")
console.log(actualQ);

// 4. Convert the given date format to YYMMDD format
let modifiedDt = dt.replace(/-/g,"")
console.log(modifiedDt);