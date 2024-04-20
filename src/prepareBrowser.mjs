

import puppeteer from "puppeteer";
/*import puppeteer from "puppeteer-extra";*/


export default async function prepareBrowser() {
  const{webSocketDebuggerUrl:browserWSEndpoint} = await fetch ("http://localhost:9922/json/version").then((r)=>r.json())
  console.log(browserWSEndpoint);
  const browser = await puppeteer.connect({browserWSEndpoint});
  return browser;
}
