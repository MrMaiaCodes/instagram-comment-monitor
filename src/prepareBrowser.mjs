
// this imports puppeteer
import puppeteer from "puppeteer";
/*import puppeteer from "puppeteer-extra";*/

// this exports prepareBrowser to index.mjs
export default async function prepareBrowser() {
  //this method awaits fetch method which needs the url as a parameterr
  const{webSocketDebuggerUrl:browserWSEndpoint} = await fetch ("http://localhost:9922/json/version").then((r)=>r.json())
  // this prints out the browserWSEndpoint which I don't know what it does
  console.log(browserWSEndpoint);
  // this awaits the puppeteer.connect command
  const browser = await puppeteer.connect({browserWSEndpoint});
  return browser;
}
