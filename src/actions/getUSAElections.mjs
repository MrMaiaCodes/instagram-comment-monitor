import preparePage from "../preparePage.mjs";

export default async function getUSAElections(browser, elections) {
    //loops all elections
    for await(let election of elections){
        const page = await preparePage(browser);
    //goes to site in parameter
    await page.goto(election);
    }
}