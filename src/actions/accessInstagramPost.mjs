//import loginInstagram from "./loginInstagram.mjs";
//exports function with page and username as parameters
export async function accessInstagramPost(page, username) {
  //.goto function tells page function which site to access, username in brackets
  await page.goto(`https://instagram.com/${username}`);
  //.waitForSelector tells page function the part of the page that matters
  await page.waitForSelector('main article a[role="link"]');
  //do not know
  await page.click('main article a[role="link"]');
  //do not know
  await page.waitForNavigation({ waitUntil: 'networkidle2', timeOut: 1000 });
}
