import{test, expect, Locator} from '@playwright/test';

test( 'read data from all avaialble page', async({page})=>{

  page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")

let hashomepage = true;
  
    while(hashomepage){
      const rows: Locator[] = await page.locator("table#example>tbody>tr").all();

       for(let row of rows){
          console.log(await row.innerText());
       }
       
       await page.waitForTimeout(3000);

       const nextbutton = page.locator("button[aria-controls='example']:has-text('›')")
       const isdisabled = await nextbutton.getAttribute("class")             //button[@class = 'dt-paging-button disabled next']

       //button[@class='dt-paging-button next']
       //button[@aria-label='Next']
       //button[aria-controls='example']:has-text('›')

           if(isdisabled?.includes('disabled')){
              hashomepage = false;
           }
           else{
            await nextbutton.click();
           }

    }

})

test('filter the row and check the row count', async({page})=>{

  page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")
      
       const dropdown:Locator = page.locator("#dt-length-0");
       await dropdown.selectOption({label:'25'});

       //approach 1
       const row = await page.locator("#example>tbody>tr").all();
       expect(row.length).toBe(25); //assertion
      
      //approach 2
       const row2 = await page.locator("#example>tbody>tr");
       expect(row2).toHaveCount (25); //assertion


})

test('search a text and fin the text', async({page})=>{

 await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")
      
       const searchbox = await page.locator("#dt-search-0").fill("Shad Decker");
           await page.waitForTimeout(3000);    

       const rows  = await page.locator("#example>tbody>tr").all(); 

            if(rows.length>=1){
               
               let matchfound = false;
                 for(let row of rows){
                      const text = await row.innerText();

                      if(text.includes("Shad Decker")){
                        console.log("Record exist - Found");
                        matchfound = true;
                        break;
                      }
               
                 }
                 //expect(matchfound).toBe(true);   // option1
                 expect(matchfound).toBeTruthy();  //option 2

            }
            else {
                console.log("no rows found with search box")
            }
})