import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Salam world")
});

app.listen(8082, () => {
    console.log("Serveur lancé et écoutant le port 8082")
});