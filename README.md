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