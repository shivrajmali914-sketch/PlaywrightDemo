import { expect, test } from "@playwright/test";


test("authenticated popup", async ({browser})=>{

     const context = await browser.newContext({httpCredentials:{username:"admin",password:"admin"}});
        const page = await context.newPage();

       //https://the-internet.herokuapp.com/basic_auth
       //https://admin:admin@the-internet.herokuapp.com/basic_auth

  /*  // approach 1 : using username and password in url
        await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        await page.waitForLoadState();   // wait for page load completely

        expect(await page.locator("//p[contains(text(),'Congratulations')]")).toBeVisible();
   */

    // approach 2 : using username and password in url
        await page.goto("https://the-internet.herokuapp.com/basic_auth");
        await page.waitForLoadState();   // wait for page load completely

        expect(await page.locator("//p[contains(text(),'Congratulations')]")).toBeVisible();


       await page.waitForTimeout(5000); 

})  