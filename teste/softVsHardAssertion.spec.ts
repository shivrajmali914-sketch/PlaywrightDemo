import {test, expect} from '@playwright/test';

test('verify soft and hard assertion', async ({page}) => {

   await page.goto("https://demowebshop.tricentis.com/");
      
   //Hard assertion
    /*  expect(page).toHaveTitle('Demo Web Shop2');     // failed
      expect(page).toHaveURL("https://demowebshop.tricentis.com/");  // passed

      const logo = await page.locator('//img[@alt="Tricentis Demo Web Shop"]');
      expect(logo).toBeVisible();  // passed

      await page.waitForTimeout(3000);
     */

    //soft assertion
      await expect.soft(page).toHaveTitle('Demo Web Shop2');     // failed
      await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");  // passed

      const logo = await page.locator('//img[@alt="Tricentis Demo Web Shop"]');
      await expect.soft(logo).toBeVisible();  // passed

      await page.waitForTimeout(3000);
})