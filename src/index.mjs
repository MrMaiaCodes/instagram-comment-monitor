import "dotenv/config"
import prepareBrowser from "./prepareBrowser.mjs";
import preparePage from "./preparePage.mjs"
import { accessInstagramPost } from "./actions/accessInstagramPost.mjs";
import getUSAElectionsPerYear from "./actions/getUSAElectionsPerYear.mjs";
import getUSAElections from "./actions/getUSAElections.mjs";
import getMembersOfCongressList from "./actions/getMembersOfCongressList.mjs";
import saveFile from "./utils/saveFile.mjs";
import loadFile from "./utils/loadFile.mjs";
import createCsvLink from "./utils/createCsvLink.mjs";
import Papa from "papaparse";
import fs from "fs/promises";

//this runs the system
async function main() {
  let allLinks = await loadFile('allLinks');
  if (allLinks.length === 0) {
    console.log("Consulting browser");
    const browser = await prepareBrowser();
    allLinks = await getMembersOfCongressList(browser, { congNo: "118", cycle: "2024" });
    await saveFile("allLinks", allLinks);
  }
  //allLinks = allLinks.slice(0, 2);
  let allContent = [];
  for await (const congressLink of allLinks) {
    const { link, cid, cycle, name } = createCsvLink(congressLink);
    console.log(`fetching: ${name}`);
    const response = await fetch(link);
    const payload = await response.text();
    let { data: content } = Papa.parse(payload, { header: true, dynamicTyping: true });
    content = content.map((item) => {
      return { ...item, cid, cycle, name }
    })
    allContent = allContent.concat(content);
  }

  const csv = Papa.unparse(allContent);
  //console.log(csv);
  await fs.writeFile(`./output/allContent.csv`, csv);
  return;



  //console.log(allLinks);

}


export default main();




// async function main() {
//  console.log("Hello, World!");
// }

// export default main();