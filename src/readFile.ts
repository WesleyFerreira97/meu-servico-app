import fs from "node:fs";
import path, { dirname } from "node:path";

const { pathname: currentFile } = new URL(import.meta.url);

const pathFile = `./${dirname(currentFile)}/db/olist_geolocation_dataset.csv`;

const finalPath = path.resolve(pathFile);
// console.log(finalPath, "Final path");
console.log(`${currentFile}`);

fs.readFile("./src/db/olist_geolocation_dataset.csv", "utf-8", (err, data) => {
    if (err) {
        console.log(err, "erro");
        return
    }

    console.log(data);
})

// async function readFile() {
//     try {
//         const data = await fs.readFile(pathFile);
//         console.log(data);


//     } catch (e) {
//         console.log("erro", e);
//     }
// }
// readFile()


