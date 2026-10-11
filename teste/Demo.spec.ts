import{ test, expect } from '@playwright/test';

test('Title of page', async ({page})=>{
await page.goto("https://trade.mirae-asset.co.in/v9/#/login")

let title:string = await page.title();
console.log("Title of page is : "+title)

await expect(page).toHaveTitle("m.Stock Demat & Trading Account Login | Mirae Asset")

})