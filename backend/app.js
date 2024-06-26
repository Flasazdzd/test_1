// Chemin: test_1-main/backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes'); // Assurez-vous d'importer les routes

const app = express();
app.use(express.json()); // Middleware pour parser le JSON

// Connexion à MongoDB
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/items', itemRoutes); // Utilisez les routes pour les items

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
