import {test, expect} from '@playwright/test';


test('verify simple alert', async({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/");

      // register a dialog handler
         page.on('dialog', (dialog) => {
           console.log("dialog type is: ", dialog.type());              // return type of dialog
           expect(dialog.type()).toContain('alert');

           console.log("dialog text: ",dialog.message());               //return msg from dialog
           expect(dialog.message()).toContain('I am an alert box!');
           
           dialog.accept();                                              // close dialog by accepting it
         })    

      await page.locator("//button[@id ='alertBtn']").click();  // open dialog

       await page.waitForTimeout(2000);

})


test('verify confirmation alert', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

      // register a dialog handler
         page.on('dialog', (dialog) => {
           console.log("dialog type is: ", dialog.type());              // return type of dialog
           expect(dialog.type()).toContain('confirm');

           console.log("dialog text: ",dialog.message());               //return msg from dialog
           expect(dialog.message()).toContain('Press a button!');
           
           //dialog.accept();                                              // close dialog by accepting it
           dialog.dismiss();                                             // close dialog by dismissing it
         })    

      await page.locator("#confirmBtn").click();  // open dialog

      const text:string = await page.locator("#demo").innerText(); 
      console.log("text after accepting the dialog is: ",text);
      //expect(text).toContain('You pressed OK!');
      expect(text).toContain('You pressed Cancel!');

       await page.waitForTimeout(2000);

})

test.only('verify prompt alert', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

      // register a dialog handler
         page.on('dialog', (dialog) => {
           console.log("dialog type is: ", dialog.type());              // return type of dialog
           expect(dialog.type()).toContain('prompt');

           console.log("dialog text: ",dialog.message());               //return msg from dialog
           expect(dialog.message()).toContain('Please enter your name:');
                
                dialog.defaultValue();  // return default value from prompt dialog
                console.log("default value is: ",dialog.defaultValue());
                expect(dialog.defaultValue()).toContain('Harry Potter');

           dialog.accept('Jhon');                                              // close dialog by accepting it
         })    

      await page.locator("#promptBtn").click();  // open dialog

      const text:string = await page.locator("#demo").innerText(); 
      console.log("text after accepting the dialog is: ",text);
      expect(text).toContain('Hello Jhon! How are you today?');
      //expect(text).toContain('User cancelled the prompt.');

       await page.waitForTimeout(2000);

})

