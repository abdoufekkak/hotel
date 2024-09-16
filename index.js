// Importer Express avec require
const express = require('express');
const cors=require('cors')
// Créer une instance d'application
const app = express();

// Définir le port sur lequel le serveur écoutera
const port = 3000;
const allowedDomains = ['https://protelhere.com','http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['OPTIONS', 'GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version'],
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions))
// Créer une route simple
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon application Node.js avec Express!');
});

// Démarrer le serveur et écouter sur le port défini
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
