import { test, chromium,firefox, expect } from '@playwright/test';

test('handles tabs', async (pages) => {
     
     const browser = await chromium.launch();    // creating browser instance
     const context = await browser.newContext();   // creating new context
     
    // creating new page in the context
    const parentpage = await context.newPage();   // creating parent page

    await parentpage.goto('https://testautomationpractice.blogspot.com/');

//2 statment go parllelly

      // context.waitForEvent("page");        // pending, fullfilled, rejected 
      // parentpage.locator("//button[text()='New Tab']").click();  // click on new tab button

       const [childpage] = await Promise.all([context.waitForEvent("page"),parentpage.locator("//button[text()='New Tab']").click()]); // wait for new tab to open and click on new tab button


   // approach 1: switch between parent and child page and get title of both pages(using context)
               const page = context.pages();
               console.log("No of pages are opened: ", page.length);

               console.log("Title of parent page: ", await page[0].title());
               console.log("Title of child page: ", await page[1].title());


  //approach 2: alernate
   
               console.log("Title of parent page: ", await parentpage.title());
               console.log("Title of child page: ", await childpage.title());   


});