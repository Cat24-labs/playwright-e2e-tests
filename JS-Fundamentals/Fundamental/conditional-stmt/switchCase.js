/**
 * Switch case
 * 
 */
let browser = "chrome"

switch (browser) {
    case "chrome":
        console.log(`Running chrome browser...`);
        break;
    case "firefox":
        console.log(`Running firefox browser...`);
        break;
    case "edge":
        console.log(`Running edge browser...`);
        break;
    default:
        console.log(`No Valid browser: ${browser} is provided...`);
}