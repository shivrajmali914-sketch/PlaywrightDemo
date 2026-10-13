
import{test, expect,Locator} from '@playwright/test';

test('Multi select dropdown', async({ page}) =>{

await  page.goto("https://testautomationpractice.blogspot.com/");

// 1. select option from dropwon (4 ways)

     //await page.locator("#colors").selectOption(['Red', 'Yellow', 'Green']); // select by text
     //await page.locator('#colors').selectOption(['red', 'white']); // select by value
     // await page.locator('#colors').selectOption([{label:'Red'},{label:'white'},{label:'blue'}]); // using label
      // await page.locator('#colors').selectOption([{index:0},{index:2},{index:5}]) // using index


 // 2. check no of option available in dropdown
   
  const dropdownalloption:Locator = page.locator("#colors option");
  await expect(dropdownalloption).toHaveCount(7);


 // 3. Check presence of option in dropdown
     
   const optionavilable: string[] = (await dropdownalloption.allTextContents()).map((text) => text.trim());
   console.log(optionavilable);

   expect(optionavilable).toContain('Green');

 //4. printing options  for dropdown 
      
     for(const option of optionavilable){
      console.log(option);
     }
     
})