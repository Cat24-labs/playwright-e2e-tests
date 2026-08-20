import { baseConfig } from "../playwright.config.ts";
import { defineConfig, devices } from "@playwright/test";
import type { EnvConfig } from "../tests/helpers/config-fixtures.ts";
import path from "path";

console.log(`---LOADING DEV ENV SETTINGS---`)
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
    ...baseConfig, // Load all the existing values...
    testDir: path.resolve(process.cwd(), "./tests"), // Fix path from config folder
    use: {
        ...baseConfig.use, // loading the existing use object
        envName: "dev",
        appURL: "https://www.google.com",
        dbConfig: {
            dbname: "",
            host: "test",
            port: "1234",
        },
    },
});
