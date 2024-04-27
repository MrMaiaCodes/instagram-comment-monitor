function evalAttribute(element, attributeName) {
    /**
     * ?? is a qualid sensing operator; ?. is an optional chaining operator.
     * Qualid sensing operator acts like a fallback in case result is undefined or null, passing through next value
     * Chaining operator returns "undefined"  without breaking your code
     */
    return element.getAttribute(attributeName)??element?.[attributeName]??null;
}

export default async function getAttributesFromSelector(page, selector, attribute) {
    // this function awaits the selector of the page and uses the reduce function on it
    // the first parameter of the reduce function catalogs the items of the array, the second
    // describes the action to be performed on them
    const results = await(await page.$$(selector)).reduce(async(result, item)=>{
        //stores result content in resulted variable
        const resulted = await result;
        /**
         * makes puppeteer evaluate item selected via evalAttribute function, which receives attribute variable
         * The resolved variable returns the part of the page desired
         */
        const resolved = await item.evaluate(evalAttribute, attribute);
        //resulted array with all evaluated values will push a new resulted away from previous item
        resulted.push(resolved);
        // return resulted data
        return Promise.resolve(resulted);
        //second parameter of .reduce function, determines first value of accumulator 
    }, Promise.resolve([]))
    return results;
}