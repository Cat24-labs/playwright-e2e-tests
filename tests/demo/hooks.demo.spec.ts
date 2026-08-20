import { test, expect } from "@playwright/test";

test.beforeAll("Beforeall hook", () => {
    console.log(`>>beforeAll: file scope...`); //Should run just once per worker
});

test.beforeEach("BeforeEach", () => {
    console.log(`beforeEach: file scope...`); // Should run before all the tests in this file
});

test.describe("Test suite 1", () => {
    //beforeAll

    test.beforeAll("Beforeall hook", () => {
    console.log(`Suite 1: beforeAll describe scope`); 
  });   
    
    //beforeEach

    test.beforeEach("BeforeEach", () => {
    console.log(`Suite 1: beforeEach at describe level...`); 
    });

    test("test one", async ({ page }) => {
        console.log(`>> Running test one...`);
        await page.goto("https://www.google.com");

    });

    test("test two", ({ page }) => {
        console.log(`>> Running test two...`)
    });

    test("test three", ({ page }) => {
        console.log(`>> Running test three...`)

    });

});


test.describe("Test suite 2", () => {
    //beforeEach

    test.beforeEach("BeforeEach", () => {
    console.log(`Suite 2: beforeEach at describe level...`); 
    });

    test("test one", async ({ page }) => {
        console.log(`>> Running test one...`);
        await page.goto("https://www.google.com");

    });

    test("test two", ({ page }) => {
        console.log(`>> Running test two...`)
    });

    test("test three", ({ page }) => {
        console.log(`>> Running test three...`)

    });

});


