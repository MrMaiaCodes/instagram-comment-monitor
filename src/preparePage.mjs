export default async function preparePage(browser){
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1});
    return page;
    }