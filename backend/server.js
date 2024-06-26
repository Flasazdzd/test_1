// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Simulated database
let items = [];

// GET Endpoint to fetch all items
app.get('/items', (req, res) => {
  res.status(200).send(items);
});

// POST Endpoint to create a new item
app.post('/items', (req, res) => {
  items.push(req.body);
  res.status(201).send(req.body);
});

// PUT Endpoint to update an item
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(item => item.id === parseInt(id));
  if (index !== -1) {
    items[index] = {...items[index], ...req.body};
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
