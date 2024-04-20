//import loginInstagram from "./loginInstagram.mjs";
export async function accessInstagramPost(page, username) {
  await page.goto(`https://instagram.com/${username}`);
  await page.waitForSelector('main article a[role="link"]');
  await page.click('main article a[role="link"]');
  await page.waitForNavigation({ waitUntil: 'networkidle2', timeOut: 1000 });
}
