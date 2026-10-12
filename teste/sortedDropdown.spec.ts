import {test, expect, Locator} from '@playwright/test';

test('sorted dropdown', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const dropdownOptions = page.locator('#animals>option');

const optiontext = (await dropdownOptions.allTextContents()).map(text => text.trim());

const originalList = [...optiontext].sort();  //...sprent operator
const sortedlist = [...optiontext].sort();

console.log("Original list:", originalList);
console.log("Sorted list:", sortedlist);

expect(originalList).toEqual(sortedlist);

})