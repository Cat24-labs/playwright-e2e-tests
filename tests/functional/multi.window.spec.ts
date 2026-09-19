import { test, expect } from "@playwright/test";

test("should navigate through multiple windows", async ({ page, context }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Multiple Windows" }).click();

  const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("link", { name: "Click Here" }).click(),
  ]);

  await newWindow.waitForLoadState();
  await expect(newWindow.locator("h3")).toHaveText("New Window");

  const [nextWindow] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("link", { name: "Elemental Selenium" }).click(),
  ]);

  await nextWindow.waitForLoadState();
  await expect(nextWindow.locator("h1")).toContainText("Elemental Selenium");

  await page.bringToFront();
});