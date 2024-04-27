import "dotenv/config"
import prepareBrowser from "./prepareBrowser.mjs";
import preparePage from "./preparePage.mjs"
import { accessInstagramPost } from "./actions/accessInstagramPost.mjs";
import getUSAElectionsPerYear from "./actions/getUSAElectionsPerYear.mjs";
import getUSAElections from "./actions/getUSAElections.mjs";
//this runs the system
async function main(){
    console.log("Hello world!");
    const browser = await prepareBrowser();
    const elections = await getUSAElectionsPerYear(browser);
    await getUSAElections(browser, elections);
    //await loginInstagram(page, process.env.LOGIN, process.env.PASSWORD);
   // await accessInstagramPost(page, process.env.LOGIN)
}


export default main();




// async function main() {
  //  console.log("Hello, World!");
// }

// export default main();