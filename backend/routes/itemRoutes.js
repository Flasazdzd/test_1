// Chemin: test_1-main/backend/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Importez votre modèle

// Route pour créer un nouvel item
router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).send(savedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route pour récupérer tous les items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route pour mettre à jour un item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(updatedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route pour supprimer un item
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
