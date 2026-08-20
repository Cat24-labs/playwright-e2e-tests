import { test, expect, devices } from "@playwright/test";
import constants from "../../data/constants.json";

test("Should load homepage with correct title", async ({ page }) => {
  // 1. Go to the home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // 2. Assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // 3. Assert header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test("should be somehing", { tag: "@Smoke" }, async ({ page }, testInfo) => {
  //steps:
  await page.locator("//h1").click();
});

test("should demo locators", async ({ page }) => {

  // ✅`page.getBy*()` and `page.locator()` method returns the `locator` object
  // ✅ The above methods not to be `awaited`
  // ✅The type of locator is an `object`
  // ✅Locators are LAZY until an action is fired on them


  // 1. Launch URL
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // 2. Click on the Make Appointment
  let makeAppmtBtn = page.getByRole("link", { name: "Invalid Locator" })
  //let makeAppmtBtn = page.getByRole("link", { name: "Make Appointment" })
  //console.log(`>> The type of locator: ${typeof makeAppmtBtn}, The value of the locator: ${JSON.stringify(makeAppmtBtn)}`)
  await makeAppmtBtn.click();
  // await expect(page.getByText("Please login to make")).toBeVisible();
  await page.getByRole('heading', { name: 'We Care About Your Health' }).click();
});



test("should demo config file", async ({ page }, testInfo) => {
      console.log(`>> Config at run-time: ${JSON.stringify(testInfo.config)}`);
});

test("should demo fixtures", async ({ request }, testInfo) => {
      //console.log(`>> The test runs on: ${browserName}`);
});


test("should demo devices", async ({ page }, testInfo) => {
      console.log(`>> The list of devices: ${Object.keys(devices)}`);
});


test("should demo parallel run 1", {tag: '@demo'}, async ({ page }, testInfo) => {
    await page.goto('https://www.google.com');
});

test("should demo parallel run 2", {tag: '@demo'}, async ({ page }, testInfo) => {
    await page.goto('https://www.google.com');
});

test.only("should demo constants data", {tag: '@demo'}, async ({ page }, testInfo) => {
    console.log(`>> Constants data: ${JSON.stringify(constants.STATUSCODE)}`);
});