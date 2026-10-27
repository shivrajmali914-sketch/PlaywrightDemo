import {test, expect,Locator} from '@playwright/test';

test("verify chrome cpu load in dynamic table", async({page})=>{

await page.goto("https://practice.expandtesting.com/dynamic-table");

   const table:Locator = page.locator("table.table tbody")
   await expect(table).toBeVisible();

   // select all the rows and find the no of rowa
    const rows:Locator[] = await table.locator("tr").all();
    console.log("no rows present in the table : ", rows.length);
    expect(rows).toHaveLength(4);

    // step 1: For Chrome process get value of  CPU load.
     //  read each row and check chrome process
    
     let cpuload= '';

     for(const row of rows){

          const processname:string = await row.locator("td").nth(0).innerText();    // find first column

          if(processname=="Chrome"){
           // const cpuload = await row.locator('td : has-text(%)').innerText();   // css syntax 
             const cpuload = await row.locator('td',{hasText:'%'}).innerText();    //Playwright syntax
             console.log("cpu load of chrome: ", cpuload)
             break;
          }

     }

    //2 step 2 Compare it with value in the yellow label.

        const yellowboxtext: string = await page.locator("p#chrome-cpu").innerText();
        console.log("chrome CPU load from yellow box : ", yellowboxtext);


        if(yellowboxtext.includes(cpuload)){
            console.log("CPU load of chrom is equal");
        }else{
            console.log("CPU load of chrom is not eual")
        }

        expect(yellowboxtext).toContain(cpuload);


     await page.waitForTimeout(3000);


})