import fs from "fs/promises"

/**
 * Read json files from ./output directory
 * @param {string} fileName 
 * @returns parsed object, or null
 */
export default async function loadFile(fileName) {
    try {
        //reads file based on fileName
        const results = await fs.readFile(`./output/${fileName}.json`, "utf-8");
        //parse results and output
    return JSON.parse(results);
    } catch (error) {
        //shows error message when file is not found
        console.error(`loadFile: ${error?.message}`);
        //returns null as default for error
        return null;
    }
    
}