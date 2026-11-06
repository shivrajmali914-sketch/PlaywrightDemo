import { test, chromium,firefox, expect } from '@playwright/test';

test('Browser context demo', async () => {

    // browser ---> context --->pages
    //browser --->chrome,firfox,webkit
    //pages ---> new tabs, windows, popups
    //context ---> we can  have multiple context in a browser, each context will have its own cookies, cache and storage.
    //page ---> we can have multiple pages in a context, each page will have its own cookies, cache and storage.

    const browser = await firefox.launch();        // create browser instance
    const context = await browser.newContext();    // create context in the browser

    // creating multiple pages in the context
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    console.log("no of pages created: ", context.pages().length); //2


    await page1.goto('https://testautomationpractice.blogspot.com/');
       expect(page1).toHaveTitle("Automation Testing Practice");

    await page2.goto('https://demowebshop.tricentis.com/');
       expect(page2).toHaveTitle("Demo Web Shop");

        await page1.waitForTimeout(2000);
        await page2.waitForTimeout(2000);
   
});