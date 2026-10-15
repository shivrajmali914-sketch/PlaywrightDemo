import { test, type Locator } from '@playwright/test';

test('Auto suggest dropdown', async({page})=>{

await page.goto("https://www.flipkart.com/");


await page.locator("span[class='b3wTlE']").click();


await page.locator('input[name="q"]:not([readonly])').fill("smart");
await page.waitForTimeout(5000);

// get all suggested options-->> ctrl+shift+p on DOM --> emulate focused page 

const option: Locator = page.locator("ul>li");
const count = await option.count();

console.log("number of suggested option: ", count)


// printing all suggested option in the console
console.log("5th option: ", await option.nth(5).innerText());


console.log("printing all options:")
for(let i=0;i<count;i++){
    console.log(await option.nth(i).innerText())
}

// select>> click on smartphone option

for(let i=0; i<count;i++){
    
    const text = await option.nth(i).innerText();
    if(text==='smartphone'){
        await option.nth(i).click();
        break;
    }
}


})