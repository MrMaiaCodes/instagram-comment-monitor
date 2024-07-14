import "dotenv/config"
import prepareBrowser from "./prepareBrowser.mjs";
import preparePage from "./preparePage.mjs"
import { accessProfilePage } from "./actions/accessProfilePage.mjs";
import { getPosts } from "./actions/getPosts.mjs";
import { accessPostPage } from "./actions/accessPostPage.mjs";

//this runs the system
async function main(){
    console.log("Hello world!");
    const browser = await prepareBrowser();
    const page = await preparePage(browser);
    const profilePage = await accessProfilePage(page, "pulseofpal");
    const posts = await getPosts(profilePage);
    console.log(posts);
    const postPages = [];
    for await (const post of posts.slice(0,1)){
      const page = await preparePage(browser);
      const pageReady = await accessPostPage(page, post);
      postPages.push(pageReady);
    }

}


export default main();




// async function main() {
  //  console.log("Hello, World!");
// }

// export default main();