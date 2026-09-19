import { test, expect, request } from "@playwright/test";
import { log } from "../helpers/logger.js";
import constants from "../../data/constants.json";
import TestData from "../../data/test-data.js";
import { env } from "node:process";
import fileHelper from "../helpers/file-helper.js";

test.describe("REST API Demo", () => {
  let envConfig = undefined;
  test.beforeEach("Get the env config", async ({ request }, testInfo) => {
    envConfig = testInfo.project.use as any;
  });
  // GET Method
  test("Should get list of users", async ({ request }) => {
    // Make a GET call
    await log("info", `Making a GET call using ${envConfig.apiURL}`);
    const res = await request.get(`${envConfig.apiURL}${constants.REQ_RES_ENDPOINTS.GET_USERS_LISTS}`,{
        headers: {
          "x-api-key": process.env.REQ_RES_API_KEY,
        },
      },
    );

    // Assert the Status Code
    expect(res.status()).toBe(200);
    await log("info", `The GET call is successful with ${res.status()}`);

    // Get list of users
    const userData = await res.json();
    log("info", `List of users: ${JSON.stringify(userData)}`);

    // Write the list of users
    fileHelper.writeFile(`${process.cwd()}/data/api-res/list-of-users.json`, `{JSON.stringify(userData, undefined, 4)}`);

  });

  // POST Method
  test("Should create user", async ({ request }) => {
    // Make a POST call
    await log("info", `Making a POST call using ${envConfig.apiURL}`);
    const payload = TestData.apiUserCreation()[0]; //replace with framework logic-> Test-data.ts
    // const payload = {
    //     name: "Alex",
    //     job: "Thomas",
    //     id: "125",
    //     createdAt: "2025-10-06T01:35:49.877Z",
    // };

    const res = await request.post(`${envConfig.apiURL}${constants.REQ_RES_ENDPOINTS.POST_USERS}`,{
        headers: {
          "x-api-key": process.env.REQ_RES_API_KEY,
          "Content-Type": "application/json",
        },
        data: payload,
      },
    );

    // Assert the Status Code
    expect(res.status()).toBe(201);
    await log("info", `The POST call is successful with ${res.status()}`);

    // Get list of users
    const resData = await res.json();
    log("info", `Response data from post call: ${JSON.stringify(resData)}`);
  });
});
