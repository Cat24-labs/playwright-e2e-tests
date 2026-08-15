import { test, expect } from "@playwright/test";

/**
 * @Scenario
 * 1. Login as standard user
 * 2. Get a list of products with its price
 * 3. Assert that all products have non-zero dollar value
 */

test.describe("Inventory feature", () => {
  test.beforeEach("Login with valid creds", async () => {});

  test("Should confirm all prices are non-zero values", async () => {});
});
