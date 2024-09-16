// Importer Express avec require
const express = require('express');

// Créer une instance d'application
const app = express();

// Définir le port sur lequel le serveur écoutera
const port = 3000;

// Créer une route simple
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon application Node.js avec Express!');
});

// Démarrer le serveur et écouter sur le port défini
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
