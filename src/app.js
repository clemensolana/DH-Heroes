//Hago require del path
const path = require('path');

//Hago require de express
const express = require('express');
const app = express();
app.use(express.static('./DH-Heroes/public'));

//Abro mi puerto para el servidor:
app.listen(3030, () => {
    console.log("Servidor funcionando correctamente");
});
//rutas:
app.get('/', (req, res) => {
    //console.log(__dirname);
    //res.sendFile('./views/index.html');
    let htmlPath = path.join(__dirname, '../DH-Heroes/views/index.html');
    res.sendFile(htmlPath);
    //console.log(htmlPath);
});
app.get('/babbage', (req, res) => {
    let htmlPath = path.join(__dirname, '../DH-Heroes/views/babbage.html');
    res.sendFile(htmlPath);
});
app.get('/berners-lee', (req, res) => {
    let htmlPath = path.join(__dirname, '../DH-Heroes/views/berners-lee.html');
    res.sendFile(htmlPath);
});
app.get('/clarke', (req, res) => {
    let htmlPath = path.join(__dirname, '../DH-Heroes/views/clarke.html');
    res.sendFile(htmlPath);
});
app.get('/hamilton', (req, res) => {
    let htmlPath = path.join(__dirname, '../DH-Heroes/views/hamilton.html');
    res.sendFile(htmlPath);
});
app.get('/hopper', (req, res) => {
    let htmlPath = path.join(__dirname, '../DH-Heroes/views/hopper.html');
    res.sendFile(htmlPath);
});
app.get('/lovelace', (req, res) => {
    let htmlPath = path.join(__dirname, '../DH-Heroes/views/lovelace.html');
    res.sendFile(htmlPath);
});
app.get('/turing', (req, res) => {
    let htmlPath = path.join(__dirname, '../DH-Heroes/views/turing.html');
    res.sendFile(htmlPath);
});