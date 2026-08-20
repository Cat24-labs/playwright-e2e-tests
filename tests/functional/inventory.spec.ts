import { test, expect } from "@playwright/test";

/**
 * Scenario:
 * 1. ✅ Login as standard user
 * 2. ✅ Get a list of products with its price
 * 3. ✅ Assert that all products have non-zero dollar value
 *
 * @locators
 * 1. .inventory_item -> all products
 * 2. .inventory_item_name -> products
 * 3. .inventory_item_price -> prices
 */

test.describe("Inventory feature", () => {
  test.beforeEach("Login with valid creds", async ({ page }) => {
    // Launch the URL
    await page.goto("https://www.saucedemo.com/");

    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // Assertion
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html ");
    await expect(page).toHaveURL(/.*\/inventory/); //RegExp condition
  });

  test("Should confirm all prices are non-zero values", async ({ page }) => {
    // Get a list of products
    let productsEls = page.locator(".inventory_item");
    await expect(productsEls).toHaveCount(6);

    // Get product name and prices
    let totalProducts = await productsEls.count();

    let PriceArr = [];
    for (let i = 0; i < totalProducts; i++) {
      let eleNode = productsEls.nth(i);

      // Product Name
      let productName = await eleNode.locator(".inventory_item_name").innerText();

      // Price
      let price = await eleNode.locator(".inventory_item_price").innerText();

      // Print the results
      console.log(`>> Products: ${productName}, Prices: ${price}`);

      PriceArr.push(price);
    }
    console.log(`Original Price Array: ${PriceArr}`);

    /**
     * [$29.99,$9.99,$15.99,$49.99,$7.99,$15.99] // Convert from String to Arithmetic
     * Replace all $ with ""
     * Compare the price which should be > 0
     *
     * [29.99,9.99,15.99,49.99,7.99,15.99]
     */

    let PriceArrNum = PriceArr.map((item) => parseFloat(item.replace("$", "")));
    console.log(`>> Modified Arr: ${PriceArrNum}`);

    let priceArrWithInvalidVals = PriceArrNum.filter((item) => item <= 0);

    if (priceArrWithInvalidVals.length > 0) {
      console.log(`ERROR: Zero price values found: ${priceArrWithInvalidVals}`);
    } else console.log(`INFO: All prices are non-zero values`);

    expect(priceArrWithInvalidVals).toHaveLength(0);
  });
});
