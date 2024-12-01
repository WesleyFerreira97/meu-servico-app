import fs from "node:fs/promises";
import path, { dirname } from "node:path";
// console.log(path.join(__dirname, "db/users.json"));
const { pathname: currentFile } = new URL(import.meta.url);


const pathFile = `${dirname(currentFile)}/db/olist_geolocation_dataset.csv`;
// console.log(pathFile);

async function readFile() {
    try {
        const data = await fs.readFile(pathFile);
        console.log(data);


    } catch (e) {
        console.log("erro", e);

    }
}
// readFile()
console.log(path.resolve(pathFile));
console.log(pathFile);


