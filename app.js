
const express = require('express'); // Importazione express
const app = express();// salvo l'invocazione di express in una variabile
const port = 4000; // identifico la porta 

app.listen(port, () =>{
    console.log('server attivo sulla porta '+ port )
}) 