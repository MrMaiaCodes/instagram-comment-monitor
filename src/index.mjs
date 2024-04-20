import "dotenv/config"
import prepareBrowser from "./prepareBrowser.mjs";
import preparePage from "./preparePage.mjs"
import { accessInstagramPost } from "./actions/accessInstagramPost.mjs";
import getUSAElectionsPerYear from "./actions/getUSAElectionsPerYear.mjs";
async function main(){
    console.log("Hello world!");
    const browser = await prepareBrowser();
    await getUSAElectionsPerYear(browser);
    //await loginInstagram(page, process.env.LOGIN, process.env.PASSWORD);
   // await accessInstagramPost(page, process.env.LOGIN)
}


export default main();




// async function main() {
  //  console.log("Hello, World!");
// }

// export default main();