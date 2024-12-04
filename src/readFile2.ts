import fs from "node:fs";
import path, { dirname } from "node:path";

const projectRootDir = import.meta.dirname;
const usersPath = `${projectRootDir}/db/users.json`;
const usersPathAbsolute = path.resolve(usersPath);

fs.readFile(usersPathAbsolute, "utf-8", (err, data) => {
    console.log(data);
});