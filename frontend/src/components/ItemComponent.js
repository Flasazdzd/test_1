// Chemin: test_1-main/frontend/src/components/ItemsComponent.js
import React, { useState, useEffect } from 'react';
import { getAllItems, createItem, updateItem, deleteItem } from '../api/itemsAPI';

function ItemsComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const allItems = await getAllItems();
      setItems(allItems);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  const handleAddItem = async (item) => {
    try {
      const newItem = await createItem(item);
      setItems([...items, newItem]);
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  const handleUpdateItem = async (id, item) => {
    try {
      const updatedItem = await updateItem(id, item);
      const updatedItems = items.map(i => i._id === id ? updatedItem : i);
      setItems(updatedItems);
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(i => i._id !== id));
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  // Affichage simple des items et des boutons pour les opérations CRUD
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.description} - {item.quantity}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
            {/* Ajouter des boutons pour modifier et des champs de saisie pour ajouter un nouvel item */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsComponent;
