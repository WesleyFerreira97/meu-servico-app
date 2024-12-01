import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("rota inicial")
})

app.post("/add-user", (req, res) => {
    console.log("add user");

})

app.listen(3000);