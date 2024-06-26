const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// Remplacez cette URL par l'URL réelle de votre frontend
const allowedOrigin = 'https://automatic-yodel-qw499pwj7p4cxv9w.github.dev';

// Utilisez CORS pour permettre uniquement à votre frontend d'accéder
app.use(cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Simulated database
let items = [];
let nextId = 1; // Simulate auto-incrementing ID

// GET Endpoint to fetch all items
app.get('/items', (req, res) => {
  res.status(200).send(items);
});

// POST Endpoint to create a new item
app.post('/items', (req, res) => {
  const newItem = { id: nextId++, ...req.body };
  items.push(newItem);
  res.status(201).send(newItem);
});

// PUT Endpoint to update an item
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(item => item.id === parseInt(id));
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.status(200).send(items[index]);
  } else {
    res.status(404).send({ msg: "Item not found" });
  }
});

// DELETE Endpoint to delete an item
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  items = items.filter(item => item.id !== parseInt(id));
  res.status(200).send({ msg: "Item deleted" });
});

// Add a default route to handle the root ("/")
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
