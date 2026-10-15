import{test, expect, Locator} from '@playwright/test';

test("Bootstrap hidden dropdown", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// Login with username and password

await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@name='password']").fill("admin123");
await page.locator("//button[@type='submit']").click()

page.getByText('PIM').click();

// click on job title dropdown
await page.locator("form i").nth(2).click();
await page.waitForTimeout(3000);

// capture all the options from dropdown and count
const option:Locator =  page.locator("div[role='listbox'] span");


const count = await option.count();
console.log("All availabe options :", count);

// print all the option

console.log("return all text :", await option.allTextContents()); // return in form array

for(let i=0; i<count; i++){

//console.log(await option.nth(i).innerText());
console.log(await option.nth(i).textContent());
}

// select and click on option

for(let i=0; i<count;i++){
    const text = await option.nth(i).innerText();
    
    if(text==='Software Engineer'){
        option.nth(i).click();
        break;
    }
}
await page.waitForTimeout(3000);

})