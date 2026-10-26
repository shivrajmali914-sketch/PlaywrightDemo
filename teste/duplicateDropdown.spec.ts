import {test, expect, Locator} from '@playwright/test';

test('sorted dropdown', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const dropdownOptions = page.locator('#animals>option'); // not duplicate

//const dropdownOptions = page.locator('#colors>option');// having duplicate

const optiontext:string[]=(await (dropdownOptions.allTextContents())).map(text=>text.trim());

const myset = new Set<string>();
const duplicate:string[] = [];

for(const text of optiontext ){
      
    if(myset.has(text)){
        duplicate.push(text);
    }
    else{
        myset.add(text);
    }
 }
    console.log("duplicate option:===> ", duplicate);

    if(duplicate.length>0){
        console.log("duplicate option found", duplicate);
    }
    else{
        console.log("No duplicate found")
    }
    
    expect(duplicate.length).toBe(0);

    console.log()

})
