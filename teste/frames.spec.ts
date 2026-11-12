import {test, expect, Locator} from '@playwright/test';

test('frame demo', async({page})=>{

  await page.goto("https://ui.vision/demo/webtest/frames/");
  
  /*
  // total number of frames in the page
  const frames = page.frames();
  console.log("no of frames : ", frames.length);

  // approach 1 - using page.frame()
      const frame = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});
        if(frame){
            await frame.locator("[name = mytext1]").fill("hello");
            //await frame.fill("[name = mytext1]", "hello");
        }
        else{
            console.log("frame not found");
        }
*/

  // approach 2 - using framelocator()

      const inputbox = page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
      await inputbox.fill("Shiv");
    
      await page.waitForTimeout(4000);

})

test.only('inner/child frame demo', async({page})=>{

  await page.goto("https://ui.vision/demo/webtest/frames/");
  
   const inputbox3 =  page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
      
   if(inputbox3){
      await inputbox3.locator("[name='mytext3']").fill("ShivRaj Mali");
        const totalchildframes = inputbox3.childFrames();    // to get no of child frames of frame_3
         console.log("Nochild fram inside the frame3: ", totalchildframes.length);
    
       const childframes = totalchildframes[0].getByLabel("I am a human");   // to get the first child frame of frame_3  
       childframes.check();   // to check the checkbox inside the child frame
       expect(childframes).toBeChecked();   // to verify the checkbox is checked or not

   }else{
    console.log("frame not found");
   }    
      await page.waitForTimeout(4000);

})