import { test, expect } from "@playwright/test";
import TestData from "../../data/test-data";
import fileHelper from "../helpers/file-helper";   
import path from "node:path";

// const makeAppTestData = TestData.makeAppointmentTestData();
const csvFilepath = path.resolve(`${process.cwd()}/data/functional/make-aptmnt-test-data.csv`)
const makeAppTestData = fileHelper.readCSV(csvFilepath)

// Access the data
for (const apptData of makeAppTestData) {
    test.describe("Make appointment", () => {
      test.beforeEach("Login with valid creds", async ({ page }) => {
           // 1. Launch URL and asset title and header
           await page.goto("https://katalon-demo-cura.herokuapp.com/");
           await expect(page).toHaveTitle("CURA Healthcare Service");
           await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

           // 2. Click on the make appointment
           await page.getByRole("link", { name: "Make Appointment" }).click();
           await expect(page.getByText("Please login to make")).toBeVisible();

           // Successful Login
           await page.getByLabel("Username").fill("John Doe");
           await page.getByLabel("Password").fill("ThisIsNotAPassword");
           await page.getByRole("button", { name: "Login" }).click();

           // Get login cookies
           const loginCookies = await page.context().cookies()
           process.env.LOGINCOOKIES = JSON.stringify(loginCookies)

           // Asset a text
           await expect(page.locator("h2")).toContainText("Make Appointment");
          
        });

        // Test goes here
          test(`${apptData.testId}: Should make an appointment with non-default`, async ({ page }, testInfo ) => {
          //console.log(`>> Current config: \n ${JSON.stringify(testInfo.config)}`);

          // Access the login cookies
          console.log(`>> Login cookies: ${process.env.LOGINCOOKIES}`);
          //Dropdown
          await page.getByLabel("Facility").selectOption(apptData.facility);

         //Checkbox
         await page.locator("div").filter({ hasText: "Apply for hospital readmission" }).nth(2).click();

         // Radio Button
         await page.getByText(apptData.hcp).check();

         // Date input box
         await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
         await page.getByRole("textbox", { name: "Visit Date (Required)" }).fill(apptData.visitDt);
         await page.getByRole("cell", { name: "5" }).first().click();

         // Multi-line comments input box
         await page.getByRole("textbox", { name: "Comment" }).click();
         await page.getByRole("textbox", { name: "Comment" }).fill("This is a multi-line comments\ncaptured by playwright codegen");

         // Button
         await page.getByRole("button", { name: "Book Appointment" }).click();

         // Assertion
         await expect(page.locator("h2")).toContainText("Appointment Confirmation");
         await expect(page.getByRole("link", { name: "Go to Homepage" })).toBeVisible();
      });
       // More tests goes here....
    });

}




