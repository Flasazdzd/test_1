// Chemin: test_1-main/frontend/src/components/ItemsComponent.js
import React, { useState, useEffect } from 'react';
import { getAllItems } from '../api/itemsAPI';

function ItemsComponent() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getAllItems();
        setItems(data);
      } catch (err) {
        setError('Failed to load items');
        console.error(err);
      }
    };

    fetchItems();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Items</h1>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item._id}>{item.name} - {item.description}</li>
          ))}
        </ul>
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
}

export default ItemsComponent;
