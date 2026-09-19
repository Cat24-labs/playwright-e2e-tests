# Instructions and Notes

## In this session...
1. ✅Install playwright
   - `npm init playwright@latest`
2. ✅Check if installed correctly
   - `npx playwright --help`

## Key callouts
- When prompted:
  - Select `TypeScript` as the language
  - Choose to install **all browsers**

3. **Verify Playwright installation:**
```sh
npx playwright --version
```
- Shows the installed Playwright version.

---


# Run the Generated Test

## Steps
1. **Run the sample test:**
```sh
npx playwright test --headed
```
- This command runs all Playwright tests in headed mode (browser UI visible).

2. **Show the test report:**
```sh
npx playwright show-report
```
- This command opens the Playwright HTML report for your test run.

---

__Note__: In Windows, If you get an error on running `webkit` browser, add the following config to ignore SSL cert

```ts
use: {
    ignoreHTTPSErrors: true,
  },
```
---

# Folder Structure Setup

Let's create the following folder structure:

```sh
PLAYWRIGHT-E2E-TESTS/
├── .github/                    # CI Config folder
├── .vscode/                    # Editor-specific settings
│   └── mcp.json                # MCP server config for VS Code
├── config/                     # Environment-specific config files
├── data/                       # Static data and constants
│   └── constants.json          # Common constants used in tests
├── debug/                      # Optional: Debug-related outputs/logs
├── logs/                       # Application/test logs
├── node_modules/               # Auto-generated dependencies
├── playwright-report/          # Playwright HTML test report output
├── resources/                  # Misc test resources (e.g. images, files)
├── tests/                      # All organized test files
│   ├── api/                    # API test specs
│   ├── demo/                   # Demo-related test specs
│   ├── devices/                # Device related scenarios
│   ├── e2e/                    # End-to-end test specs
│   ├── functional/             # Functional test cases
│   ├── helpers/                # Utility functions for tests
│   ├── page-objects/           # Page Object Model files
├── tests-examples/             # Auto-generated sample test scenarios
├── .env.example                # Template for environment files
├── .env                        # Template for environment files
├── .gitignore                  # Git ignored files and folders
├── package-lock.json           # Dependency lock file
├── package.json                # Project metadata and scripts
├── playwright.config.ts        # Playwright configuration file
├── README.md                   # Project overview and instructions
```

---

## Quick Check

1. In the `playwright.config.ts` file, comment out all other browsers and ensure only `chromium` is enabled.

2. Run the following command to verify everything still works:

```sh
npx playwright test --headed
```

If tests execute successfully, you're all set!

🎯 The target project structure is now set up. Let’s keep moving forward... 🚀

---


# Recommended VS Code Extensions

- vscode-icons
- Prettier - Code formatter
- Path Intellisense
- npm Intellisense
- DotENV
- JavaScript (ES6) code snippets
- .gitignore Generator

---

Install these extensions from the VS Code Extensions Marketplace for a smoother and more productive workflow.


# Git Installation Guide for macOS

Follow these steps to install Git on macOS:

## Steps

1. **Install Git via Xcode Command Line Tools (Recommended & Easiest):**

Open your terminal and run:

```sh
git --version
```
If Git is not installed, this command will prompt you to install the Xcode Command Line Tools. Follow the on-screen instructions.

Once installed, run the command again to confirm:

```sh
git --version
```
You should see the installed Git version.

2. **(Alternative) Install Git using Homebrew:**

First, check if you have Homebrew installed:

```sh
brew --version
```
If you see a version number, Homebrew is installed. If not, install it with:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Git:

```sh
brew install git
```

Verify the installation:

```sh
git --version
```
You should see the installed Git version.

---





# Local Git Setup

1. **Initialize a Local Git repository:**

```sh
git init
```

2. **Check which files are to be staged:**

```sh
git status
```
- This command shows the changes in the current directory.

3. **Add or check project-specific files in the `.gitignore` file.**
   1. You can use the `VS Code` extention to create the content

4. **Stage all files for commit:**

```sh
git add .
```

2. **Check which files are staged or ready to be committed:**

```sh
git status
```

3. **Commit the staged files:**

```sh
git commit -m "Your commit message here"
```
- This command commits all staged changes with a descriptive message.

---


# Staging, Committing, and Pushing Files with Git

4. **Link your local repository to a remote URL:**

```sh
git branch -M main # To match with remote branch name
git remote add origin <remote-url>
```

5. **Confirm local and remote URLs:**

```sh
git remote -v
```
- This command shows the fetch and push URLs for your remote (they should be the same).

6. **Push your first change to the remote repository:**

```sh
git push -u origin main
```
- The `-u` flag sets the upstream (remote tracking) branch.
- If you see an error like `fatal: repository xx not found`, check your user and permissions with:

```sh
git config --list
```
- Make sure you have the right user and permission to commit. If not, add yourself as a collaborator in the GitHub settings and accept the invitation.
- If you still have issues, you can force push:

```sh
git push -f origin main
```
- Then set the remote tracking branch:

```sh
git branch -u origin/main
```

---




### 3.1. Creating a basic test

[💡] Playwright recognizes the following file extensions as valid test specification files:
  - `*.spec.ts`
  - `*.test.ts`

__STEPS__:

1. Create a spec file `first-test.spec.ts` under the `./demo` folder
2. Add the following test code:

<details>
<summary><strong>Sample Playwright Test: Home Page Title and Header</strong></summary>

```ts
import { test, expect } from "@playwright/test";

test("Should load home page with correct title", async ({ page }) => {
    // Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

    // Assert header text
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare providr')
});
```
</details>

3. Run this specific test file
   
```sh
npx playwright test tests/demo/first-test.spec.ts --headed
```

[💡] To know more about `playwright test` command, run

```sh
npx playwright test --help
```

🎯 Congrats! We wrote a simple test, now let's understant each line. 

---


***Common Errors***
1. Spec/test file not having `.spec or .test` init
2. Navigation timeout error

```ts
use: {
   navigationTimeout: 30_000, // Set timout to 30 seconds
},
```
3. Missing `await` keyword before action methods
4. Done! 


### Option 1: VS Code Extension

1. Open the VS CODE Extensions Marketplace and install:  
   **`Playwright Test for VSCode`**
2. Once installed, look for a new **laboratory flask icon** in the sidebar. Click to open the extension.
3. You can now:
   - **Record tests** interactively
   - **Capture locators** with tooltips and visibility checks

[💡] __Tips While Using the Extension__
- Click on `assertion` tooltips to select an element.
  - `Visibility` checks ensure the element is ready before interacting.
  - `text` selectors provide an extra layer of validation.

---

### Option 2: Command Line Interface (CLI)

1. View available options:
```sh
npx playwright codegen --help
```
2. Run with or without a URL:
```sh
npx playwright codegen
npx playwright codegen https://katalon-demo-cura.herokuapp.com/
```

[💡] __Use CLI for__
- Device emulation
- Custom viewport settings
- Automation scripts and advanced workflows

🎯 **Codegen** can drastically reduce your test writing time and help you learn the best locator strategies along the way.

---

# Button and Link Interactions

## Click Actions
### Methods Used
```js
// Single click on button or link
.click()  

// Double click on button or link
.dblclick()

// Right click on button or link (context menu)
.click({button: 'right'})

// Press Enter key on focused element
.press('Enter')

// Hover over element to show tooltips or trigger hover effects
.hover()

// Click with custom timeout
.click({timeout: 5000})
```

---

## Pro Tips
- ✅ Use `.click()` for most button and link interactions - it's the most reliable method.
- ✅ Use `.press('Enter')` as an alternative to clicking, especially for accessibility testing.
- ✅ Use `.hover()` to trigger hover states before clicking if needed for dropdown menus.
- ✅ Use `.dblclick()` for elements that require double-click activation.
- ✅ Set custom timeouts with `{timeout: 5000}` for slow-loading elements.
- ✅ Right-click with `{button: 'right'}` to test context menus.

---

## Reference 
- Key reference: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values


## URL-- E-commerce_platform
npx playwright codegen https://www.saucedemo.com/



# Allure Reporter Setup for Playwright

## Installation & Basic Setup

### Step 1: Check and Install Allure Command Line Tool 

```sh
allure --version
```

If you encounter an error like `zsh: command not found: allure`, install the global command line tool:

```sh
npm install -g allure-commandline
```


### Step 1: Install Allure Playwright Package

Install the allure reporter as a development dependency:

```sh
npm install -D allure-playwright
```

---

### Step 2: Configure Reporter in Playwright Config

Update the `reporter` section in your `playwright.config.ts` file:

```ts
reporter: [
  ['html'],                    // Default Playwright HTML reporter
  ['allure-playwright'],       // Allure reporter
],
```

---
Run a test and you will see a folder `allure-results` in the project root

### Step 3: Generate and View Reports

After running your tests, generate the Allure report:

```sh
allure serve
```



## Advanced Configuration

### Enhanced Reporter Setup

For more detailed reporting, you can configure additional options:

```ts
reporter: [
  [
    'html',
    {
      open: 'never', // Don't auto-open HTML report
    },
  ],
  [
    'allure-playwright',
    {
      detail: true,
      suiteTitle: true,
      environmentInfo: {
        name: 'TEST',
        Release: 'Release 1.1',
        node_version: process.version
      },
    },
  ],
],
```

---

### Reference 
- [Allure Advance Config] (https://allurereport.org/docs/playwright/)

--- 



# Java Installation (macOS)

## Steps
1. **Check if Java is installed:**
```sh
java -version
```
- If the version is JDK 8 or higher, skip installation.

2. **Download Java:**
   - Go to [Adoptium Java Downloads](https://adoptium.net/en-GB/)
   - Download the LTS version for macOS

3. **Install:**
   - Run the installer, accept the terms, and complete the installation

4. **Verify installation:**
```sh
java -version
```
   - Shows the installed Java version.

## Notes
- File size: ~180 MB, installation takes a few secondsp

---


# Adding Screenshots in Playwright

## Option 1: Auto-Capture via Config

Add the following setting in the `use` section of your `playwright.config.ts`:

```ts
use: {
  screenshot: 'on', // Captures screenshot after each test
  // OR
  screenshot: 'only-on-failure', // Captures only when tests fail
}
```

## Option 2: Manual Screenshot Capture

### Basic Manual Screenshot

```ts  
  // Capture the screenshot
  const screenshot = await page.screenshot({ fullPage: true });
  
  // Attach it to the report
  await test.info().attach("Full Page Screenshot", {
    body: screenshot,
    contentType: "image/png",
  });

```


The following examples demonstrate how to:

- ✅ Add annotations to a group of tests
- ✅ Conditionally skip tests (e.g., based on environment or browser)
- ✅ Use custom tags like `@smoke` for categorization and filtering

💡 Pro Tip: You can use `--grep` command in CLI to run only tests with the @smoke tag:

```sh
npx playwright test --grep '@smoke' --headed
```

In windows, remember to escape the quotes, like

```sh
"demo": "npx playwright test --grep=\"@smoke\" --headed",
```

# ⏳ Playwright Timeouts Quick Reference

| Timeout Scope          | Default   | In Code                           | Config                       | CLI Flag           |
|------------------------|-----------|-----------------------------------|------------------------------|--------------------|
| **Action**             | none      | `{ timeout }` at action level     | `use: { actionTimeout }`     | —                  |
| **Expect**             | 5,000 ms  | `{ timeout }` on expect level     | `expect: { timeout }`        | —                  |
| **Test function**      | 30,000 ms | `test.setTimeout`, `test.slow`    | `timeout`                    | `--timeout`        |
| **beforeAll/afterAll** | 30,000 ms | `testInfo.setTimeout` inside hook | —                            | —                  |
| **Navigation**         | none      | `{ timeout }`                     | `use: { navigationTimeout }` | —                  |
| **Global run**         | none      | —                                 | `globalTimeout`              | `--global-timeout` |




# Chrome Arguments

## Configuration Options

### Global Configuration (affects all projects)
```ts
// playwright.config.ts
export default defineConfig({
  use: {
    launchOptions: {
      args: ["--disable-web-security"]
    }
  }
});
```

### Project-Specific Configuration
```ts
// playwright.config.ts
projects: [
  {
    name: "chromium-headless",
    use: {
      ...devices["Desktop Chrome"],
      launchOptions: {
        args: ["--no-sandbox", "--disable-dev-shm-usage"]
      }
    }
  }
]
```

---

## Common Combinations

### For Stable CI Testing
```ts
args: [
  "--no-sandbox",
  "--disable-dev-shm-usage",
  "--disable-gpu",
  "--disable-extensions",
  "--disable-background-networking",
  "--no-first-run",
  "--disable-default-apps"
]
```

### For Cross-Origin Testing
```ts
args: [
  "--disable-web-security",
  "--disable-features=VizDisplayCompositor",
  "--allow-running-insecure-content",
  "--disable-background-networking"
]
```

### For Mobile
```ts
args: [
    "--use-mobile-user-agent",
    "--touch-events=enabled",
    "--enable-viewport-meta"
  ]
```


---

## References

- [Chromium Command Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)

---


# Global Setup and Teardown setup

## Global Set up
Following examples demonstrates deleting allure results for every local run

```ts
import { FullConfig } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export default async function globalSetup(config: FullConfig) {
    /* Executed before all the workers start. Good place to keep one-off tasks before all workers start */
    console.log("--- STARTING GLOBAL SETUP ---");
    if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        const resultsDir = path.resolve(process.cwd(), "allure-results");
        if (fs.existsSync(resultsDir)) {
            fs.rmSync(resultsDir, { recursive: true, force: true });
            console.log(">> Deleted allure-results folder for clean local run.");
        }
    }

    // Add any other global setup logic here:
    // - Database initialization
    // - Test data preparation
    // - Environment configuration
    // - External service setup
    // - Start test servers


    console.log("--- GLOBAL SETUP COMPLETE ---");
}

```

## Global teardown
Following examples demonstrates spining up allure reporter at the end of every local test run

```ts
import { FullConfig } from "@playwright/test";
import { exec } from "child_process";

export default async function globalTeardown(config: FullConfig) {
    /* Executed after all workers complete. Good place for cleanup tasks */
    console.log("--- STARTING TEARDOWN PROCESS ---");

    /**
     * This can be used to:
     * - Release the database connection
     * - Reset application state. e.g. Delete a created record/transaction so you can re-use
     * - Temp folder/files clean up
     * - Generate and open reports
     */

    // Generate Allure report for local runs
    if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        console.log(" >> Local run detected - starting Allure server...");
        exec("allure serve", (error, stdout, stderr) => {
            if (error) {
                console.error("ERROR: Starting Allure server:", error.message);
            }
        });
    }

    console.log("--- TEARDOWN PROCESS COMPLETE ---");
}

```

## Recommended `tsconfig.json` for JSON Import Support
1. To import `.json` files smoothly, ensure your project has a valid TypeScript config:
2. Create the file `tsconfig.json` at the project root and add the follwoing basic config

```json
{
    "compilerOptions": {
        "target": "ESNext",
        "module": "CommonJS",
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "strict": false,
        "noImplicitAny": false
    },
    "include": ["tests/**/*.ts", "data/**/*.ts", "playwright.config.ts"],
    "exclude": ["node_modules", "dist"]
}

```

3. Reference: https://www.typescriptlang.org/tsconfig/



## Handling Static/Constants Data

### Reading data from JSON file

1. **Create a JSON file under /data folder**  
   - Add a sample data

2. **Import the JSON file** into any test or helper file:

```ts
import constants from "../../data/constants.json";
```
4. Access values using `dot` notation. You can also use `JSON.stringify()` to print or log entire objects.

__Notes & Troubleshooting__
**Error:**
An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.ts(5097)
✅ Fix: Remove the .ts extension from the import path.

**Error:**
SyntaxError: data/constants.json: Unexpected end of JSON input
✅ Fix: Make sure your JSON file is not empty and contains valid syntax.

---



## Different Environment Data Handling

1. Create a config fixture which can be used across different environment

```ts
// tests/helpers/config-fixtures.ts
import { test as base } from "@playwright/test";

export type EnvConfig = {
    envName: string;
    appURL: string;
    dbConfig: {};
};

export const test = base.extend<EnvConfig>({
    // Define options and provide default values.
    // We can later override them in the config.
    envName: ["provide-a-val", { option: true }],
    appURL: ["provide-a-val", { option: true }],
    dbConfig: [{}, { option: true }],
});

```

2. Create a new config file

```ts
// config/test.playwright.config.ts

import { baseConfig } from "../playwright.config.ts";
import { defineConfig, devices } from "@playwright/test";
import type { EnvConfig } from "../tests/helpers/config-fixtures.ts";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<EnvConfig>({
    ...baseConfig,
    testDir: "../tests", // Fix path from config folder
    use: {
        ...baseConfig.use, // Required
        envName: "test",
        appURL: "https://katalon-demo-cura.herokuapp.com/",
        dbConfig: {
            dbname: "",
            host: "test",
            port: "1234",
        },
    },
});
```

3. Use the variable in a test 

```ts
// tests/functional/make-apptmnt.spec.ts
    test.beforeEach("Launch Homepage", async ({ page }, testInfo) => {
        // Access the custom env specific value as below
        const envConfig = testInfo.project.use as any; // Note: project and use are just objects ✅ // @ts-ignore
        console.log(`>>> Final Config: ${JSON.stringify(testInfo.config)}`);
        console.log(`>>> Custom Env Config: ${JSON.stringify(envConfig.envName)}`);

        // Launch Home page
        await page.goto(envConfig.appURL);
        // Rest of the steps
    });

```
4. Done! 🎉


## Handling Sensitive Data
Use `.env` files to manage environment-specific variables for flexible and secure test execution.

---

__Steps to Load Environment Data from `.env` Files__:
1. Install `dotenv`

```sh
npm i -D dotenv
```
- `dotenv:` Loads variables from .env files

2. Import Modules in `playwright.config.ts`

```ts
import dotenv from 'dotenv';
dotenv.config();
```

3. You can update the variable in `.env` file

```sh
# Runner
RUNNER=local

# TEST - CURA WEB APP
TEST_USER_NAME=John Doe
TEST_PASSWORD=ThisIsNotAPassword
```

4. You can access these variable as the node.js env variable across the project files
5. Update the username and password in a test file and run

Note: If you see type error when using `process.env.{varName}`, you can overcome this by having a `non-null assertion (!)` check but be sure that the variable exists. Alternatively you can use `//@ts-ignore`

🎯 You’re now ready to run Playwright tests in different environments with ease!

---


# Read Data From CSV File

### Pseudocode
1. Create a `.csv` file with test data
2. Read the file with native `fs` module
3. Parse the csv data -> Array of data (install csv-parse)
4. Console out the data
5. Done ! 🎉


```ts
import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

/**
1. Create a `.csv` file with test data
2. Read the file with native `fs` module
3. Parse the csv data -> Array of data
4. Console out the data
5. Done ! 🎉
*/

// Read the file
const csvFilePath = path.resolve(`${process.cwd()}/data/functional/make-aptmnt-test-data.csv`)
const fileContent = fs.readFileSync(csvFilePath, {encoding: "utf-8"})
console.log(fileContent);
console.log(typeof fileContent);

// Parse the csv data
const csvDataArr = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true
})

// Console out the data
console.log(csvDataArr);

```

**Reference**
1. Nodejs Doco: https://nodejs.org/docs/latest/api/fs.html#synchronous-api 
---


## Set up logger

Use the following code to set up a logger util

```ts
import { test } from "@playwright/test";
import chalk from "chalk";

type Level = "log" | "info" | "warn" | "error";

export async function log(level: Level, message: string) {
    const plainLine = `[${level.toUpperCase()}]: ${message}`; // For Allure
    let coloredLine = plainLine;

    // Pick color based on log level
    switch (level) {
        case "info":
            coloredLine = chalk.blue(plainLine);
            break;
        case "warn":
            coloredLine = chalk.yellow(plainLine);
            break;
        case "error":
            coloredLine = chalk.red(plainLine);
            break;
        default:
            coloredLine = chalk.white(plainLine);
    }

    // Print colored text in terminal
    (console[level] || console.log)(coloredLine);

    // Send plain text to Allure
    await test.step(plainLine, async () => {});
}

```
## Set up a base page

1. Create `basepage.ts` under `./tests/page-objects'` folder
2. A sample content of the file: 

```ts
import { expect, type Locator, type Page } from "@playwright/test";
import { log } from "../helpers/logger.js";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /* All reusable actions */
    async navigateTo(path: string) {
        await log("info", `Navigating to the path: ${path}`);
        await this.page.goto(path);
    }

    /** Click action */
    async click(ele: Locator) {
        try {
            await expect(ele).toBeVisible({ timeout: 10_000 }); // Custom timeout: Default - 5 seconds
            await ele.click();
        } catch (error) {
            await log("error", `Failed to click element: ${ele.toString()}, original error: ${error}`);
            throw error;
        }
    }

    /** Type action */
    async typeInto(ele: Locator, text: string) {
        try {
            await expect(ele).toBeVisible({ timeout: 10_000 });
            await ele.fill(text);
        } catch (error) {
            await log("error", `Failed to type into element: ${ele.toString()}, original error: ${error}`);
            throw error;
        }
    }
}

```
---


# Instructions and Notes

***Record Test Execution Flow***
1. Recoed the login flow: `await page.goto('https://admin-demo.nopcommerce.com/');` app //admin@yourstore.com; passcode:admin
2. Add URL assertion
3. Run and Confirm if its work
4. Done!


## Create Home Page Object
Sample code for home and customer list page

**home page**
```ts
import BasePage from "./basepage.js";
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
            await this.navigateTo(url);
            await this.typeInto(this.usernameInputBox, username);
            await this.typeInto(this.passwordInputBox, password);
            await this.click(this.loginBtn);
            await expect(this.page).toHaveTitle("Dashboard / nopCommerce administration");
            await log("info", "Home page is launched successfully...");
        } catch (err) {
            (err as Error).message = `Failed login to nopcommerce web: ${url}, with username: ${username}`;
            throw err;
        }
    }
}

export default HomePage;

// Use this in your tests like:
// const homePage = new HomePage(page);

/**
 * Notes:
 * 1. This is where we spent MOST of the hours getting the locators and adding methods on a page for covearg
 * 2. Use 'codegen' generated selectors to construct page objects
 */

```
---

# Running the E2E Test Sucessfully

__Steps__
1. Get the API key and update `.env` file
2. Add the following setting in `playwright.config.ts`
```ts
// Use object
userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

// Project object
args: ["--disable-blink-features=AutomationControlled", "--disable-features=IsolateOrigins,site-per-process", "--allow-no-sandbox-job"],
```
1. Re-run the test
2. Test ✅ 
---


## 🚀 GitHub Copilot Setup**

__Pre-Requisite__
1. Should have a valid `github` credentials
2. Latest VSCode installed (`Command Palette -> Help:About`)

__Check__
1. The signed-in user in VS Code
2. GitHub -> Profiles should showup your current plan
3. Done !🎉


## 🚀 Playwright MCP Server Setup**

1. Create `.vscode/mcp.json` in the workspace
2. This config has two structure

```json
"servers": {} - Contains the list of MCP servers and their configurations
"inputs": [] - Optional placeholders for sensitive information like API keys
```
3. Add the playwright MCP server config
4. Done! 🎉



## Playwright MCP Server - In Action ##
1. Create a new spec file called `multi.window.spec.ts` under my functional folder
2. And capture the flows as below
   - Navigate to the site: `https://the-internet.herokuapp.com/`
   - Click on "Multiple Windows" link
   - Navigate to the newly opened window and assert the tile
   - Click the link on that new window
   - Navigate to the next window that is opened
   - Assert the header text
   - Come back to the present window
3. Add a new key in `package.json` file
4. And run the spec in `headed` mode



# 🧩 YML/YAML – Fast Facts

## 📘 Overview
YAML (YAML Ain’t Markup Language) is a **human-readable data format** used to define structured data — especially in **DevOps, CI/CD pipelines, and automation tools** like GitHub Actions, Docker, and Kubernetes.

It’s popular because it’s **simple, readable, and indentation-based** — no curly braces or brackets like JSON.

---

## 🧠 Key Concepts

| Concept | Description | Example |
|----------|--------------|----------|
| **File Extension** | YAML files use `.yaml` or `.yml` (both are valid) | `config.yaml` |
| **Key–Value Pair** | Each line has a key followed by a colon | `name: Playwright` |
| **Indentation** | Spaces define hierarchy (⚠️ tabs are **not** allowed) | <br>`test:`<br>&nbsp;&nbsp;`script: run-tests.sh` |
| **Lists / Arrays** | Begin with a dash `-` | <br>`browsers:`<br>&nbsp;&nbsp;`- chrome`<br>&nbsp;&nbsp;`- firefox` |
| **Comments** | Start with `#` | `# This is a comment` |
| **Multi-line Values** | Use `|` for block text | <br>`description: |`<br>&nbsp;&nbsp;`This test runs...` |
| **Booleans & Numbers** | No quotes needed for simple values | `enabled: true` |

---

## Useful VS Code Extentions
1. GitHub Actions
2. YAML ❤️ JSON

---