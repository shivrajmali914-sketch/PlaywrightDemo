import { test, expect, Locator } from '@playwright/test';

test("static web table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table: Locator = page.locator("table[name='BookTable']>tbody");
    await expect(table).toBeVisible();

// 1. count No of rows in a table

    const rows: Locator = page.locator("table[name='BookTable']>tbody>tr"); // count all rows including header
    await expect(rows).toHaveCount(7);  // approach 1

    const rowcount: number = await rows.count();
    console.log("total row count in table :", rowcount);
    expect(rowcount).toBe(7);  // approach 2


// 2. count number of headers/column

    const column: Locator = page.locator("table[name='BookTable']>tbody>tr>th");
    await expect(column).toHaveCount(4);    //approach 1

    const columncount: number = await column.count();
    console.log("total column in the headers: ", columncount);
    expect(columncount).toBe(4);   //approach 2

//3. read all the data from 2nd row

    const secondrowcell: Locator = rows.nth(2).locator("td");

    const secondrowtext: string[] = await secondrowcell.allInnerTexts();
    console.log("2nd row data: ", secondrowtext);
    await expect(secondrowcell).toHaveText(["Learn Java", "Mukesh", "Java", "500"]);

    for (let text of secondrowtext) {
        console.log(text);
    }


//4. print all table data
    console.log("Printing all table data")
    const allrowsdata: Locator[] = await rows.all(); // convert locator into array

    for (let row of allrowsdata.slice(1)) {                                 // skip headers using slice 
        const col: string[] = await row.locator("td").allInnerTexts();
        console.log(col.join('\t'));                       // t is for tab and removing array
    }

// 5. print book name where auther is mukesh

    console.log(" print book name where auther is mukesh")

    const mukeshbook: string[] = [];

    for (let row of allrowsdata.slice(1)) {
        const cell = await row.locator("td").allInnerTexts();
        const author = cell[1];
        const book = cell[0];

        if (author === "Mukesh") {
            console.log(`Author: ${author}\tBook: ${book}`);
            mukeshbook.push(book);
        }
    }
    expect(mukeshbook).toHaveLength(2);  // assertion

// 6. calculate total price of all books

    let totalPrice: number = 0;
    for (let rows of allrowsdata.slice(1)) {

        const cell: string[] = await rows.locator("td").allInnerTexts();
        const price = cell[3]

        totalPrice = totalPrice + parseInt(price);
    }

    console.log("total price: ", totalPrice);
    expect(totalPrice).toBe(7100);

})
