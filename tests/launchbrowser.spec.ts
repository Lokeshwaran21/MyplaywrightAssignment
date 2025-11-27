import { chromium, test } from "@playwright/test";

test("To launch a browser", async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.screenshot({ path: "screenshots/google.png", fullPage: true });
   
    await page.locator(`#username`).fill(`lokesh`)
    await page.locator(`#password`).fill(`loki`)
    await page.locator(`.decorativeSubmit`).click()
    await page.waitForTimeout(5000);
});