import "dotenv/config"
import prepareBrowser from "./prepareBrowser.mjs";
import preparePage from "./preparePage.mjs"
import loginInstagram from "./loginInstagram.mjs";

async function accessInstagramPost(page){
  await page.waitForSelector('main article a[role="link"]');
  await page.click('main article a[role="link"]');
  await page.waitForNavigation({waitUntil:'networkidle2', timeOut: 1000});
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