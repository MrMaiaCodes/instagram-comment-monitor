import fs from "fs/promises"

export default async function saveFile(fileName, content) {
    return await  fs.writeFile(
        `./output/${fileName}.json`,
        JSON.stringify(content),
        "utf-8"
    );
}