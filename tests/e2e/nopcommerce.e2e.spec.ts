import { test, expect } from "@playwright/test";
import { log } from "../helpers/logger";
import HomePage from "../page-objects/nopcommerce.home.page";
import CustList from "../page-objects/nopcommerce.custlist.page";
import constants from "../../data/constants.json";

test.describe("E2E Customer Search", async () => {
  
  test("E2E_TC001: Search the external customers in customer portal", async ({page, request }, testInfo) => {
    // Env Config
    const envConfig = testInfo.project.use as any;
     
    /** 1. Get list of users */
    // Make a GET call
      await log("info", `Making a GET call using ${envConfig.apiURL}`);
      const res = await request.get(`${envConfig.apiURL}${constants.REQ_RES_ENDPOINTS.GET_USERS_LISTS}`, {
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

      /** 2. Login to web */
      const homePage = new HomePage(page);
      await homePage.loginTonopCommerceWeb(
        envConfig.nopCommerceWeb,
        process.env.NOP_COMMERCE_TEST_USERNAME,
        process.env.NOP_COMMERCE_TEST_PASSWORD,
      );

      /**
       * https://admin-demo.nopcommerce.com/Admin/Customer/List
       */

      /** 3. Customer Search */
      const USER_DATA = userData.data
      const customerListPage = new CustList(page);
      await customerListPage.goToCustomerListPage(`${envConfig.nopCommerceWeb}/Admin/Customer/List`);
      

      // Iterate over the list of users
      for (const user of USER_DATA) {
        let customerNotFound = await customerListPage.searchNameAndConfirm(user.first_name,user.last_name);
        if (customerNotFound) {
        await log("warn",`The given user: ${user.first_name} ${user.last_name} could not found in the portal`);
      } else {
        await log("info",`The given user: ${user.first_name} ${user.last_name} found in the portal`);
      }
    }
    });
  });
