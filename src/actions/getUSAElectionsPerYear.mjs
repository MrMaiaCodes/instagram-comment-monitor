import preparePage from "../preparePage.mjs";

export default async function getUSAElectionsPerYear(browser) {
    const page = await preparePage(browser);
    await page.goto("https://www.opensecrets.org/presidential-elections");
    await page.waitForSelector('h2>a[href*="pres"]');
}