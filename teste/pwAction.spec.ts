import {test, expect, Locator} from '@playwright/test';


// fill data in name input field and verify the entered value and maxlength attribute value of name input field
test('test',async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const nameinput: Locator = page.locator("#name");
    await expect(nameinput).toBeVisible();
    await expect(nameinput).toBeEnabled();

    const maxlenght:any = await nameinput.getAttribute("maxlength");
    console.log("Maxlength value is: "+maxlenght);
    expect(maxlenght).toBe("15");

    await nameinput.fill("Shivraj Mali");

         const enteredvalue: string = await  nameinput.inputValue();
         console.log("Entered value is: "+enteredvalue);
         expect(enteredvalue).toBe("Shivraj Mali");

})

// radio button and checkbox selection and verification

test('radio_button_verification', async ({page}) =>{

await page.goto("https://testautomationpractice.blogspot.com/");

const maleradio: Locator = page.locator("//input[@id = 'male']");
await expect(maleradio).toBeVisible();
await expect(maleradio).toBeEnabled();
expect(await maleradio.isChecked()).toBe(false);

await maleradio.check();
expect(await maleradio.isChecked()).toBe(true);
await expect(maleradio).toBeChecked();

})


// checkbox selection and verification
test('checkbox verfication', async({page}) =>{

await page.goto("https://testautomationpractice.blogspot.com/");

//1. check specific check box using  getlabel method and assert
const sundayCheckbox: Locator = page.getByLabel('Sunday');
await sundayCheckbox.check();
expect(await sundayCheckbox.isChecked()).toBe(true);

//2. capture all checkboxes using array method and assert the count of checkboxes
const days:string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const checkboxes:Locator[] = days.map(index => page.getByLabel(index));
expect(checkboxes.length).toBe(7);

//3. check all checkboxes using for loop and assert the count of checked checkboxes
for(let i=0; i<checkboxes.length; i++){
    await checkboxes[i].check();
    expect(await checkboxes[i].isChecked()).toBe(true);
}

for(const checkbox of checkboxes){
    await checkbox.check();
   await expect(checkbox).toBeChecked();
}

//4. uncheck last 3 checkboxes and assert the count of checked checkboxes
for(const checkbox of checkboxes.slice(-3)){
    await checkbox.uncheck();
   await expect(checkbox).not.toBeChecked();
}

await page.waitForTimeout(3000);

//5. if checked then uncheck the checkbox and assert 

for(const checkbox of checkboxes){

    // only if checked then uncheck the checkbox and assert
     if(await checkbox.isChecked()){
            await checkbox.uncheck();
            expect(checkbox).not.toBeChecked();
     }

     // only if unchecked then check the checkbox and assert
     else{
        await checkbox.check();
        expect(checkbox).toBeChecked();
     }
}
await page.waitForTimeout(3000);


// 6. select random  checkboxes

const indexes:number[] = [1,3,6];
    for(const i of indexes){
        await checkboxes[i].check();
        expect(checkboxes[i]).toBeChecked();
    }

    await page.waitForTimeout(5000);

// 7. select checkbox based on label 

      const weekdays:string = "tuesday";

      for (const label of days)
        
        if(label.toLowerCase() === weekdays.toLowerCase()){
            const  checkbox = page.getByLabel(label);
            await checkbox.check();
           await expect(checkbox).toBeChecked();
        }
    
      await page.waitForTimeout(5000);

})