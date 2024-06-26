// Chemin: test_1-main/backend/models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Item', itemSchema);
