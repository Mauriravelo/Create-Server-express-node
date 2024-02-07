/*
const http = require('http');

const colors = require('colors')

const handleServer = function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>¡Hola mundo desde NodeJS, te quiero mucho!</h1>');
    res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Servidor en el puerto 3000'.yellow);
});
*/


const express = require('express')
const colors = require('colors')

const server = express()

server.get('/', function(req, res) {
    res.send("<h1> hola mundo con node.js y express </h1>")
    res.end
})

server.listen(3000, function()  {
    console.log('server on port 3000'.red)
})
















/*const fs = require('fs')

fs.readFile('./texto.txt', function(err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})*/


    // CODIGO ASINCRONO
/*fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if(err) {
        console.log(err)
    }else {
        console.log('Archivo creado')
    }
})

console.log('ultima linea de codigo')*/


// CODIGO NORMAL 
/*const os =require('os')

console.log(os.platform())
console.log(os.release())
console.log('free mem:', os.freemem(), 'bytes')
console.log('total mem:', os.totalmem(), 'bytes')
*/
