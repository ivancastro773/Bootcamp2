import express from "express"
import cors from "cors"
import methodOverride from "method-override";

const server = express();


server.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000");
});

server.get("/",(req,res)=>{
    res.send("andando");
});
server.get("/mi/:nombre",(req,res)=>{
    let nombre = req.params.nombre;
    res.send(`mi nombre es ${nombre}`);
});
server.get("/mipais",(req,res)=>{
    let pais = req.query.pais;
    res.send(`mi pais : ${pais}`);
});