import express from "express";

import users from "./db/users.json";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const data = await fetch("https://rickandmortyapi.com/api");
    const datafodase = await data.json();
    console.log(data, "dataaa");

    res.send("Rota inicial")
});

app.post("/add/:id", (req, res) => {

})

app.listen(3000, () => console.log("server running"));