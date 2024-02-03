const express = require("express"); //importando
const app = express(); //iniciando
const port = 4000;

app.get("/",(req,res)=>{
    res.send("Home");
});

app.get("/blog/:artigo?",(req,res)=>{
    let artigo = req.params.artigo;
    if (artigo){
        res.send("Artigo : " + artigo)
    }else{
        res.send("Bem vindo ao meu blog");
    }  
});

app.get("/canal/youtube",(req,res)=>{
    let canal = req.query["canal"];
    res.send(canal);
});

app.get("/ola/:nome",(req,res)=>{
    let nome = req.params.nome;
    res.send("<h1>Oi,  " + nome + "</h1>")
});

app.listen(port,function(erro){
    if (erro){
        console.log("Ocorrue um erro!");
    }else{
        console.log("Server is running!");
    }
});