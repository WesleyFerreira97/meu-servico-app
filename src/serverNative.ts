import { createServer } from "node:http";

const server = createServer((req, res) => {
    res.write("Rota inicial")
    res.end();
});


server.listen(3333, () => console.log("Listen 3333"))