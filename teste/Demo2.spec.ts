import{ test, expect } from '@playwright/test';

test('to verify url of page', async ({page})=>{
await page.goto("https://trade.mirae-asset.co.in/v9/#/login")

let url:string = page.url();
console.log("to verify url of page is : "+url)

await expect(page).toHaveURL("https://trade.mirae-asset.co.in/v9/#/login")

})