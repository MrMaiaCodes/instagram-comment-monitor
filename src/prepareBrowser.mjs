import puppeteer from "puppeteer-extra";

export async function prepareBrowser() {
  const browser = await puppeteer.launch({ headless: false, userDataDir: "data" });
  return browser;
}
