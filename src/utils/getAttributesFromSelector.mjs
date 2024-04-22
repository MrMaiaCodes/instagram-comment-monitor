export default async function getAttributesFromSelector(page, selector, attribute) {
    const result = await(await page.$$(selector)).reduce(async(result, item)=>{
        const resulted = await result;
    })
}