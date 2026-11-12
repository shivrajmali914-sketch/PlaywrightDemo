import{test, expect} from '@playwright/test';

test('auto waiting and facing', async ({ page }) => {

  test.setTimeout(50000);      // 50 sec
  //test.slow();   // 90 sec (default is 30 sec)  

   await page.goto("https://demowebshop.tricentis.com/");
   
   // assertion -  auto wait works
     await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout: 6000});   // 6 sec
     await expect(page.locator("//img[@alt='Tricentis Demo Web Shop']")).toBeVisible({timeout: 6000});   // 6 sec

   // actions - auto wait works
    await page.locator("//input[@value='Search store']").fill("Laptop", {force:true});   // search box - force action
    await page.locator("//input[@type='submit']").click({force:true});                 // search button - force action



})
