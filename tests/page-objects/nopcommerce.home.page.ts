import BasePage from "./base.page.js";
import { expect, type Page } from "@playwright/test";
import { log } from "../helpers/logger.js";

class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /* Elements */
    get usernameInputBox() {
        return this.page.getByRole("textbox", { name: "Email:" });
    }
    get passwordInputBox() {
        return this.page.getByRole("textbox", { name: "Password:" });
    }
    get loginBtn() {
        return this.page.getByRole("button", { name: "Log in" });
    }

    /* Page Actions */
    async loginTonopCommerceWeb(url: string, username: string, password: string) {
        try {
            await log("info", `Login to :${url} with ${username}`);
            // Login
            await this.navigateTo(url);
            await this.typeInto(this.usernameInputBox, username);
            await this.typeInto(this.passwordInputBox, password);
            await this.click(this.loginBtn);

            // Assert the URL
            await expect(this.page).toHaveURL(`${url}/admin/`);
            await log("info", "Home page is launched successfully...");
        } catch (err) {
            (err as Error).message = `Failed login to nopcommerce web: ${url}, with username: ${username}`;
            throw err;
        }
    }
}

export default HomePage;


/**
 *  // Launch the URL
  await page.goto('https://admin-demo.nopcommerce.com/');

  // Login
  await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
 
  // Assert the URL
  await expect(page).toHaveURL("https://admin-demo.nopcommerce.com/admin/")
 */