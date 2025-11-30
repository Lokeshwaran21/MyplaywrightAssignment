import{test} from "@playwright/test"

test(`verify dropdown behaviour`, async({page}) => {
    await page.goto('https://leafground.com/select.xhtml')
    await page.locator('select.ui-selectonemenu').selectOption(`Playwright`)
    const options = (await page.locator(`select.ui-selectonemenu option`).allInnerTexts()).filter(t=>t.trim() !== 'Select Tool');
    console.log(`automation tool values: `+options)
    console.log(`automation tool length: `+options.length)
    await page.waitForTimeout(3000)

    await page.locator(`//label[contains(text(),'Select Country')]`).click();
    await page.locator(`//li[contains(text(),'India')]`).click();
    await page.waitForTimeout(2000)
    await page.locator(`//label[contains(text(),'Select City')]`).click();
    await page.locator(`//li[contains(text(),'Chennai')]`).click();
    await page.waitForTimeout(2000)

    await page.locator(`(//h5[contains(text(),'Choose the Course')]/following::div/button)[1]`).click();
    await page.locator(`//li[contains(text(),'AWS')]`).click();
    await page.locator(`(//h5[contains(text(),'Choose the Course')]/following::div/button)[1]`).click();
    await page.locator(`//li[contains(text(),'Playwright')]`).click();
    await page.locator(`(//h5[contains(text(),'Choose the Course')]/following::div/button)[1]`).click();
    await page.locator(`//li[contains(text(),'PostMan')]`).click();
    await page.waitForTimeout(2000)

    await page.locator(`//label[contains(text(),'Select Language')]`).click();    
    const option1 = (await page.locator(`//li[contains(text(),'Select Language')]/parent::ul//li`).allInnerTexts()).filter(l =>l.trim() !== 'Select Language');
    console.log(`language values: `+option1)
    console.log(`language count: `+option1.length)
    await page.locator(`//li[contains(text(),'Tamil')]`).click();
    await page.waitForTimeout(2000)

    await page.locator(`//label[contains(text(),'Select Values')]`).click();
    await page.locator(`//li[contains(text(),'இரண்டு')]`).click();
    await page.waitForTimeout(2000)

}


)