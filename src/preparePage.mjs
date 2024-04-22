export default async function preparePage(browser){
    // awaits the command to initialize a new page
    const page = await browser.newPage();
    // gives the page settings
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1});
    // returns the page
    return page;
    }