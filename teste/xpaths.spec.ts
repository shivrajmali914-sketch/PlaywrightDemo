import {test,expect, Locator} from '@playwright/test';

test ("to verify xpath locators", async({page})=>{

await page.goto("https://trade.mirae-asset.co.in/v9/#/login");

// 1. absoulte x path

const logo: Locator = page.locator("xpath=/html/body/app-root/app-login/main/section/div[1]/div[1]/img");
await expect(logo).toBeVisible();


// 2. relative x path

const logo2: Locator = page.locator("xpath=//img[@alt='m,Stock by Mirae Asset']");
await expect(logo2).toBeVisible();

});