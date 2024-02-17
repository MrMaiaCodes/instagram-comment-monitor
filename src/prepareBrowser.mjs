import puppeteer from "puppeteer-extra";

export default async function prepareBrowser() {
  const browser = await puppeteer.launch({ headless: false, userDataDir: "data" });
  return browser;
}
