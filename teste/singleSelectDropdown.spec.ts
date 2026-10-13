import{test, expect, Locator} from '@playwright/test';

test('single select dropdown', async ({ page }) => {
    
// 1. select option from dropwon (4 ways)

     await  page.goto("https://testautomationpractice.blogspot.com/");

     // await page.locator('#country').selectOption('India'); // select by text
     // await page.locator('#country').selectOption({label:'China'}); // select by label
    //  await page.locator('#country').selectOption({value:'japan'}); // select by value
    //  await page.locator('#country').selectOption({index:3}); // select by index
   //   await page.waitForTimeout(4000);


 // 2. check no of option available in dropdown
     const allOptions: Locator = page.locator('#country>option');  
     await expect(allOptions).toHaveCount(10); // check no of options available in dropdown 
    // console.log(await allOptions.allTextContents()); // print all options available in dropdown
  

 // 3. Check presence of option in dropdown
      const optionText: string [] = (await allOptions.allTextContents()).map(text => text.trim()); // get all options available in dropdown and trim spaces
      console.log(optionText);
      expect(optionText).toContain('India'); // check presence of option in dropdown

 //4. printing options  for dropdown 
      
     for(const option of optionText){
     console.log("All avaialble option in dropdown: " + option);
      }
     
})