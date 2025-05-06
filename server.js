const express = require("express");
const caminho = require("path");

const app = express();
const porta = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","casa.html"));
});

app.get("/sobre", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","sobrenos.html"));
});

app.get("/inicio", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","inicio.html"));
});

app.get("/casa", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","casa feita.html"));
});

app.listen(porta,() =>{
    console.log("http://localhost:"+porta);
});