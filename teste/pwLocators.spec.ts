import { test, expect, Locator } from "@playwright/test"

test(" to verify locators", async({page})=>{
await page.goto("https://trade.mirae-asset.co.in/v9/#/login");

const logo: Locator = page.getByAltText("m,Stock by Mirae Asset");
await expect(logo).toBeVisible();
 console.log("Logo is visible : "+await logo.isVisible());


const text:Locator = page.getByText("Superfast platform. Powerful products. Unmatched pricing!");
await expect (text).toBeVisible();

await page.getByRole("button", { name: "Login with Credentials" }).click();
await expect(page.getByRole("heading",{name:" Login "})).toBeVisible();

// await page.getByRole("textbox", { name: "Enter Mobile Number / Client Code" }).fill("MA2210203");
// await page.getByRole("textbox", { name: "Enter Password" }).fill("Mirae@5555");
// await page.getByRole("button", { name: "Login" }).click();


// await page.locator('(//*[@placeholder=" "])[1]').fill("MA2210203");

await page.pause();
})







