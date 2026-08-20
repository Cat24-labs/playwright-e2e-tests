import fs, { readFile, writeFile } from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

/**
 * Read the csv file
 * @param filepath 
 * @returns Array of objects
 */

function readCSV(filepath: string): any[] {
  //Read a file
  const csvDataStr = fs.readFileSync(filepath, { encoding: "utf-8" });

  // Parse the csv data, Array of Data - (npm i --save-dev csv-parse -> RUN IN TERMINAL FOR FIRST TIME SETUP)
  const csvDataArr = parse(csvDataStr, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  return csvDataArr
}

export default{ readFile, writeFile, readCSV};