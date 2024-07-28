import getAttributesFromSelector from "../utils/getAttributesFromSelector.mjs";

export async function getPosts(page) {
const reelsArray = await getAttributesFromSelector(page, 'a[href^="/reel/"]', 'href');
const picsArray = await getAttributesFromSelector(page, 'a[href^="/p/"]', 'href');
//console.log(reelsArray);
//console.log(picsArray);

return [...(new Set([...reelsArray, ...picsArray]))];
}