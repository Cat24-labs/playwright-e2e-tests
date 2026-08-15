import { test, expect } from "@playwright/test";

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

    // Asset a text
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  // Test goes here
  test("Should make an appointment with non-default", async ({ page }) => {
    //Dropdown
    await page.getByLabel("Facility").selectOption("Hongkong CURA Healthcare Center");

    //Checkbox
    await page.locator("div").filter({ hasText: "Apply for hospital readmission" }).nth(2).click();

    // Radio Button
    await page.getByRole("radio", { name: "Medicaid" }).check();

    // Date input box
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).fill("05/10/2027");
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
