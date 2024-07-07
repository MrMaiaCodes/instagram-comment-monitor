import preparePage from "../preparePage.mjs";
import sleep from "../utils/sleep.mjs";

import getAttributesFromSelector from "../utils/getAttributesFromSelector.mjs";


function shouldNavigateNext(status) {
    const [, , , current, , next] = status.split(" ");
    return current !== next;
}

export default async function getMembersOfCongressList(browser, options = {}) {
    //"https://www.opensecrets.org/members-of-congress/members-list?cong_no=118&cycle=2024"
    /*the next three-line block of code accesses the congress member list according to the election year and 
    congress number.*/
    const url = new URL("https://www.opensecrets.org/members-of-congress/members-list");
    url.searchParams.set("cong_no", options.congNo);
    url.searchParams.set("cycle", options.cycle);

    /*The code below prepares the browser with a new page to access the URl created above*/
    const page = await preparePage(browser);

    /*asks page. to navigate to the url we navigated to*/
    await page.goto(url.toString());

    let allLinks = [];
    while (true) {
        //document.querySelectorAll('a[href^="/members-of-congress/"]:not(.SubNav-link)')
        const linksSelector = 'a[href^="/members-of-congress/"]:not(.SubNav-link)';
        await page.waitForSelector(linksSelector);
        const links = await getAttributesFromSelector(page, linksSelector, 'href');
        //console.log(links);
        allLinks = allLinks.concat(links);
        const statusSelector = 'div.dataTables_info#DataTables_Table_0_info';
        await page.waitForSelector(statusSelector);
        const [currentPage] = await getAttributesFromSelector(page, statusSelector, 'innerText');
        if (shouldNavigateNext(currentPage)) {
            const next = 'a.paginate_button.next[id$="next"]';
            await page.waitForSelector(next);
            await page.click(next);
            await sleep(1000);
        } else {
            break;
        }
    }
    return allLinks;
}