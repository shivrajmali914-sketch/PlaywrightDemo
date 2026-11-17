import { test, expect } from "@playwright/test";

test.beforeAll("beforeall", async()=>{
     console.log("this is before all")
})

test.afterAll("afterall", async()=>{
     console.log("this is after all")
})

test.beforeEach("beforeeach", async()=>{
     console.log("this is before each")
})

test.afterEach("aftereach", async()=>{
     console.log("this is after each")
})


    test("test cases: 1", async () => {
        console.log("test case 1");
    })

    test("test cases: 2", async () => {
        console.log("test case 2");
    })


    test("test cases: 3", async () => {
        console.log("test case 3");
    })

    test("test cases: 4", async () => {
        console.log("test case 4");
    })
