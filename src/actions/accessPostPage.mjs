import getAttributesFromSelector from "../utils/getAttributesFromSelector.mjs";

export async function accessPostPage(page, post) {
    const url = `https://www.instagram.com${post}`
    await page.goto(url);
    await page.waitForSelector("main");
    /*
    document.querySelectorAll('div >div:nth-child(2) >div >div:nth-child(1) >div >div:nth-child(2) >div:nth-child(1) >div >div >div:nth-child(2) >span')
    */

    const comments = await getAttributesFromSelector(
        page,
        'div >div:nth-child(2) >div >div:nth-child(1) >div >div:nth-child(2) >div:nth-child(1) >div >div >div:nth-child(2) >span',
        "innerText"
    );
    const firstComment = await getAttributesFromSelector(
        page,
        'main div >div:nth-child(2) >div >span >div >span',
        "innerText"
    );

    return {page, comments, firstComment};
}