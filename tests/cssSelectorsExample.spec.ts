import { chromium, test } from "@playwright/test";
import { expect } from '@playwright/test';

test("Login to CRM APplication and perform certain actions", async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.screenshot({ path: "screenshots/google.png", fullPage: true });
   
    await page.locator(`#username`).fill(`Demosalesmanager`)
    await page.locator(`#password`).fill(`crmsfa`)
    await page.locator(`.decorativeSubmit`).click()
    await page.waitForTimeout(5000);
    await page.locator(`#label > a`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[contains(@href,'leadsMain')]`).click();
    await page.locator(`//a[contains(@href,'createLeadForm')]`).click();

    const company = page.locator("//input[@class = 'inputBox' and@name='companyName']"); // locator only
    await company.fill('Loki_TechSoft');
    const firstName = page.locator("//input[@class = 'inputBox' and@name='firstName']"); // locator only
    await firstName.fill('Lokeshwaran');
    const lastName = page.locator("//input[@class = 'inputBox' and@name='lastName']"); // locator only
    await lastName.fill('sivakumar');
    // await page.locator(`//input[@class = 'inputBox' and@name='firstName']`).fill(`Lokeshwaran`);
    // await page.locator(`//input[@class = 'inputBox' and@name='lastName']`).fill(`sivakumar`);
    await page.locator(`//input[@class = 'inputBox' and@name='personalTitle']`).fill(`Mr.`);
    await page.locator(`//input[@class = 'inputBox' and@name='generalProfTitle']`).fill(`Manager`);
    await page.locator(`//input[@class = 'inputBox' and@name='annualRevenue']`).fill(`12 Lakhs`);
    await page.locator(`//input[@class = 'inputBox' and@name='departmentName']`).fill(`IT`);
    await page.locator(`//input[@class = 'inputBox' and@name='primaryPhoneNumber']`).fill(`9876890876`);
    await page.locator(`//input[@class = 'smallSubmit' and@name='submitButton']`).click();
    await page.waitForTimeout(5000);
    const companyName = page.locator(`#viewLead_companyName_sp`)
    await expect(companyName).toContainText(`Loki_TechSoft`);
    await expect(page.locator(`#viewLead_firstName_sp`)).toHaveText('Lokeshwaran');
    await expect(page.locator(`#viewLead_lastName_sp`)).toHaveText('sivakumar');
    const status = await page.locator(`#viewLead_statusId_sp`).innerText();
    console.log(status);
    
    
});