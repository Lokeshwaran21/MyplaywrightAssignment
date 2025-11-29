import { chromium, test } from "@playwright/test";
import { expect } from '@playwright/test';

// test("Login to CRM APplication and perform certain actions", async ({page,browser }) => {
//     await page.goto("http://leaftaps.com/opentaps/control/main");
//     await page.screenshot({ path: "screenshots/google.png", fullPage: true });   
//     await page.locator(`#username`).fill(`Demosalesmanager`)
//     await page.locator(`#password`).fill(`crmsfa`)
//     await page.locator(`.decorativeSubmit`).click()
//     await page.waitForTimeout(5000);
//     await page.locator(`#label > a`).click();
//     await page.waitForTimeout(3000);
//     await page.locator(`//a[contains(@href,'leadsMain')]`).click();
//     await page.locator(`//a[contains(@href,'createLeadForm')]`).click();
//     const company = page.locator("//input[@class = 'inputBox' and@name='companyName']"); // locator only
//     await company.fill('Loki_TechSoft');
//     const firstName = page.locator("//input[@class = 'inputBox' and@name='firstName']"); // locator only
//     await firstName.fill('Lokeshwaran');
//     const lastName = page.locator("//input[@class = 'inputBox' and@name='lastName']"); // locator only
//     await lastName.fill('sivakumar');
//     // await page.locator(`//input[@class = 'inputBox' and@name='firstName']`).fill(`Lokeshwaran`);
//     // await page.locator(`//input[@class = 'inputBox' and@name='lastName']`).fill(`sivakumar`);
//     await page.locator(`//input[@class = 'inputBox' and@name='personalTitle']`).fill(`Mr.`);
//     await page.locator(`//input[@class = 'inputBox' and@name='generalProfTitle']`).fill(`Manager`);
//     await page.locator(`//input[@class = 'inputBox' and@name='annualRevenue']`).fill(`1200`);
//     await page.locator(`//input[@class = 'inputBox' and@name='departmentName']`).fill(`IT`);
//     await page.locator(`//input[@class = 'inputBox' and@name='primaryPhoneNumber']`).fill(`9876890876`);
//     await page.locator(`//input[@class = 'smallSubmit' and@name='submitButton']`).click();
//     await page.waitForTimeout(5000);
//     const companyName = page.locator(`#viewLead_companyName_sp`)
//     await expect(companyName).toContainText(`Loki_TechSoft`);
//     await expect(page.locator(`#viewLead_firstName_sp`)).toHaveText('Lokeshwaran');
//     await expect(page.locator(`#viewLead_lastName_sp`)).toHaveText('sivakumar');
//     const status = await page.locator(`#viewLead_statusId_sp`).innerText();
//     console.log(status); 
//     await browser.close();
// });

// test("test to Edit a Lead",async({page,browser}) =>{
//     await page.goto("http://leaftaps.com/opentaps/control/main");
//     await page.screenshot({ path: "screenshots/google.png", fullPage: true });   
//     await page.locator(`#username`).fill(`Demosalesmanager`)
//     await page.locator(`#password`).fill(`crmsfa`)
//     await page.locator(`.decorativeSubmit`).click()
//     await page.waitForTimeout(5000);
//     await page.locator(`#label > a`).click();
//     await page.waitForTimeout(3000);
//     await page.locator(`//a[contains(@href,'leadsMain')]`).click();
//     await page.locator(`//a[contains(@href,'findLeads')]`).click();
//     await page.waitForTimeout(3000)
//     await page.locator('input[name="firstName"]').nth(2).fill(`lokeshwaran`)
//     await page.locator(`//button[contains(text(),'Find Leads')]`).click();
//     await page.waitForTimeout(3000)
//     await page.locator(`(//div[@class='x-grid3-scroller']//a)[1]`).click();
//     await page.locator(`//a[@class='subMenuButton' and text()='Edit']`).click();

//     const company = page.locator("//input[@class = 'inputBox' and@name='companyName']"); // locator only
//     await company.fill('Loki_TechSoft01');
//     await page.locator(`//input[@class = 'inputBox' and@name='annualRevenue']`).fill(`1200000`);
//     await page.locator(`//input[@class = 'inputBox' and@name='departmentName']`).fill(`CSE`);
//     await page.locator(`//textarea[@class = 'inputBox' and@name='description']`).fill('Edit leads is completed')
//     await page.locator(`//input[@class = 'smallSubmit' and @value='Update']`).click();

//     const companyName = page.locator(`#viewLead_companyName_sp`)
//     await expect(companyName).toContainText(`Loki_TechSoft01`);
//     const AnnualRevenue = page.locator(`#viewLead_annualRevenue_sp`)
//     await expect(AnnualRevenue).toContainText(`$1,200,000.00`)
//     const departmentName = page.locator(`#viewLead_departmentName_sp`)
//     await expect(departmentName).toContainText(`CSE`)
//     const pageTitle = await page.title();
//     console.log(pageTitle);

//     await browser.close()


// });

test(`Login to salesforce and create new account`,async ({page,browser}) =>{
    await page.goto(`https://login.salesforce.com/`)
    await page.getByLabel("Username").fill("lokeshsivakumar21772@agentforce.com");
    await page.getByLabel("Password").fill("Lokesh@2194")
    await page.getByRole('button',{name:'Log In'}).click()
    await page.pause();
    await page.locator(`//div[@class='slds-icon-waffle']`).isVisible();
    const title = await page.title();
    const url = await page.url();
    await expect(title).toContain('Salesforce Developers')
    await expect(url).toContain('https://orgfarm-bbf7e11a3b-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')





})
