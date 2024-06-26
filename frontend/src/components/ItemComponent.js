import React, { useState } from 'react';
import { createItem, deleteItem, updateItem, getItem, getItems } from '../api/itemsAPI';

function ItemComponent() {
    const [item, setItem] = useState({});
    const [items, setItems] = useState([]);

    // Exemple de fonction pour obtenir tous les items
    const fetchItems = async () => {
        const items = await getItems();
        setItems(items);
    };

    return (
        <div>
            <h1>Items</h1>
            {items.map((item) => (
                <div key={item._id}>{item.name} - ${item.price}</div>
            ))}
            <button onClick={fetchItems}>Load Items</button>
        </div>
    );
}

export default ItemComponent;
