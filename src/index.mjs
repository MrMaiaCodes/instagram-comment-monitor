import "dotenv/config"
import puppeteer from "puppeteer-extra";

async function accessInstagramPost(page){
  await page.waitForSelector('main article a[role="link"]');
  await page.click('main article a[role="link"]');
  await page.waitForNavigation({waitUntil:'networkidle2', timeOut: 1000});
}

async function loginInstagram(page, username, password){
  await page.goto('https://instagram.com')
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', username, {delay:33});
  await page.waitForSelector('input[name="password"]');
  await page.type('input[name="password"]', password, {delay:33});
  await page.click('button[type="submit"]');
  await page.waitForNavigation({waitUntil:'networkidle2', timeOut: 1000});
  await page.goto('https://instagram.com/cigarraman');
}

async function preparePage(browser){
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1});
return page;
}

async function prepareBrowser(){
  const browser = await puppeteer.launch({headless:false});
  return browser;
}

async function main(){
    console.log("Hello world!");
    const browser = await prepareBrowser();
    const page = await preparePage(browser);
    await loginInstagram(page, process.env.LOGIN, process.env.PASSWORD);
    await accessInstagramPost(page)
}


export default main();




// async function main() {
  //  console.log("Hello, World!");
// }

// export default main();