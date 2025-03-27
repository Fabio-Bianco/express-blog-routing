const express = require('express'); // Importazione express
const app = express();              // Invocazione di express
const port = 4000;                  // Porta del server

// rotta principale
app.get('/', (req, res) => {
    console.log('sto chiamando la rotta principale');
    res.send('Benvenuto nel blog');
});

// Rotta /bacheca
app.get('/bacheca', (req, res) => {
    console.log('sto chiamando la bacheca');
    res.json({ posts });
  });


// Avvio del server
app.listen(port, () => {
    console.log(`[DEBUG] Server attivo sulla porta ${port}`);
});
