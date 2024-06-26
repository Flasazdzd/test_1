// Chemin: test_1-main/frontend/src/api/itemsAPI.js
import axios from 'axios';

// Utilisez l'URL avec le port exposé pour Codespaces
const baseUrl = 'https://3001-automatic-yodel-qw499pwj7p4cxv9w.githubpreview.dev/items';

export const getAllItems = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const createItem = async (item) => {
  try {
    const response = await axios.post(baseUrl, item);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, item);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};
