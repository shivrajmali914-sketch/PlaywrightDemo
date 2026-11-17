import { expect, test } from "@playwright/test";


test("handle popup", async ({browser})=>{

        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://testautomationpractice.blogspot.com/");

        //  multiple popup handling
       // page.waitForEvent("popup");
       // await page.locator("//button[text()='Popup Windows']").click();

       await Promise.all([page.waitForEvent("popup"),await page.locator("//button[text()='Popup Windows']").click()]);

         const allpopwindow =  context.pages();   //breturn array of pages
         console.log("no of popup windows: ",allpopwindow.length);  //2

         console.log(allpopwindow[0].url());  //parent page url
         console.log(allpopwindow[1].url());  //child page url  


         for(const pg of allpopwindow){

            const title = await pg.title();

            if(title.includes("playwright")){

                await pg.locator("//a[@href='/documentation/webdriver/getting_started/']").click();
                     await page.waitForTimeout(5000);

                await pg.close();                               // this will close the popup window
            }
         }

})  