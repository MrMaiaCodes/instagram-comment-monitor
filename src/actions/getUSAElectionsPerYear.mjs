import { Browser } from "puppeteer";
import preparePage from "../preparePage.mjs";
import getAttributesFromSelector from "../utils/getAttributesFromSelector.mjs";
/**
 * function to get the us elections per year. Don't know what goes in browser parameter
 * @param {Browser} browser 
 */
export default async function getUSAElectionsPerYear(browser) {
    
    const page = await preparePage(browser);
    //goes to site in parameter
    await page.goto("https://www.opensecrets.org/presidential-elections");
    //waits for the part that matters for the page to appear
    await page.waitForSelector('h2>a[href*="pres"]');
    const paths = await getAttributesFromSelector(page, 'h2>a[href*="pres"]', "href");
    //.map is a function that maps items in the array (applies something to each) and returns modified array
    //by inserting item in the designated place within url string,we can result in the url where the item resides
    const urls = paths.map(item => `https://www.opensecrets.org${item}`)
    return urls;
}