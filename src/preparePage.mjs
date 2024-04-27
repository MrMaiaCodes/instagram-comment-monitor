import { Browser, Page } from "puppeteer";

/**
 * preparePage creates a new page access based on browser
 * @param {Browser} browser 
 * @returns {Page}
 */
export default async function preparePage(browser){
    // initializes a new page
    const page = await browser.newPage();
    // applies settings to create a new page, to set page options
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1});
    return page;
}