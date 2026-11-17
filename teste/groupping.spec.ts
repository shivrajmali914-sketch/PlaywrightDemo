import { test, expect } from "@playwright/test";

test.describe("group1", async () => {

    test("test cases: 1", async ({ page }) => {
        console.log("test case 1");
    })

    test("test cases: 2", async ({ page }) => {
        console.log("test case 2");
    })

})

test.describe("group2", async() => {

    test("test cases: 3", async ({ page }) => {
        console.log("test case 3");
    })

    test("test cases: 4", async ({ page }) => {
        console.log("test case 4");
    })

})