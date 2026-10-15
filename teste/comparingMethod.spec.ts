import{expect, test, Locator} from '@playwright/test';

test("comparing methods", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    const product:Locator = page.locator(".product-item"); 
       
   // 1. inner tet vs text content
     //  await product.nth(2).innerText();
      // await product.nth(2).textContent();

       const count = await product.count();
       console.log("Total no of product : ", count);

     /*  for(let i=0;i<count;i++){
           
         //  const productname1:string = await product.nth(i).innerText();
         //  const productname2:string | null = await product.nth(i).textContent();

         //  console.log(productname1);  //extract plain text eliminate whitespaces and lines, breaks 
         //  console.log(productname2); //extract text including hidden elements. includes extract whitespaces lines and breaks

           const productname3:string | null = await product.nth(i).textContent();
           console.log(productname3?.trim());


       } */

    //2. allinnertet vs alltetcontent
      /*   console.log("capturing all text : allinnertet vs alltetcontent") 


          // const products:string[] =  await product.allInnerTexts();
           //console.log("product name captured by allinnertext() :", products);

           const productsname:string[] =  await product.allTextContents();
          // console.log("product name captured by alltextcontent() :", products);

           const productstrim:string[] =  productsname.map(text=>text.trim());
           console.log("product name captured by alltextcontent() :", productstrim);
*/

      //3. all()  -  converts locator--> locator[]
            // return array of locator
            // return array of locator (stores locators of products) converts locator to array of locators (for iteration)
           
            const productlocator:Locator[] = await product.all();
            console.log(productlocator);
           
           // console.log(await productlocator[1].innerText());
           for(let productloc of productlocator){
           console.log(await productloc.innerText())

           }


})