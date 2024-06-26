const Item = require('../models/item');

// Créer un nouvel item
exports.createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).send(newItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Lire tous les items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Lire un item spécifique par ID
exports.getItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un item
exports.updateItem = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        updates.forEach((update) => item[update] = req.body[update]);
        await item.save();
        res.send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Supprimer un item
exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};
