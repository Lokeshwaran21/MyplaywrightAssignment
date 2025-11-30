import { chromium, test,type TestInfo } from "@playwright/test";
import { expect } from '@playwright/test';


test("Open redbus in MS edge browser and valdiate tiltle and url",async({page}) =>{
    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(5000)
    console.log("test running in MS edge");
    await expect(page).toHaveURL(/redbus/)
    await expect(page).toHaveTitle(/Bus Booking Online and Train Tickets at Lowest Price/i)

})


test("Open flipkart website and validate url and title", async({page}) =>{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(5000)
    console.log("Browser opened in webkit");
    await expect(page).toHaveURL(/flipkart/)
    await expect(page).toHaveTitle(/Online Shopping India Mobile,/i)    

}
)