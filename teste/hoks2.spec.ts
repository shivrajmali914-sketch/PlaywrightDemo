/*     open app                     -- before all
         login                     -- before each
            find product
         logout                    -- after each
         login                     -- before each
            add product
         logout                     -- after each
       close app                   --  after all
*/
import { test, expect, Page } from "@playwright/test";

let page: Page;

test.beforeAll("open app", async ({ browser }) => {

    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
})

test.afterAll("close app", async () => {
    await page.close();
})


test.beforeEach("login", async () => {
    await page.locator("//a [@id= 'login2']").click();
    await page.locator("//input[@id= 'loginusername']").fill("TEST1010");
    await page.locator("//input[@id= 'loginpassword']").fill("TEST11010");
    await page.locator("//button[@onclick= 'logIn()']").click();

})

test.afterEach("Logout", async () => {
    await page.locator("//a[@id= 'logout2']").click();
})

test.describe("Mygroup", async ()=>{

    test("find all product", async () => {
        const product = await page.locator("//a[@class='hrefch']");
        const countofproduct = await product.count();
        console.log("no of product:", countofproduct);

        await expect(product).toHaveCount(9);
    })

    test("add product in cart", async () => {

        await page.locator("//a[@class='hrefch' and text()='Samsung galaxy s6']").click();

        // handle alert before the click
        page.once("dialog", async (dialog) => {
            expect(dialog.message()).toContain("Product added.");
            dialog.accept();
        })

        await page.locator("//a[@class= 'btn btn-success btn-lg']").click();

    })
})

