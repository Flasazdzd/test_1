// frontend/src/api/itemsAPI.js
import axios from 'axios';

const baseUrl = 'https://3001-automatic-yodel-qw499pwj7p4cxv9w.githubpreview.dev'; // Assurez-vous que cette URL est correcte

export const getAllItems = async () => {
  try {
    const response = await axios.get(`${baseUrl}/items`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createItem = async (item) => {
  try {
    const response = await axios.post(`${baseUrl}/items`, item);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    const response = await axios.put(`${baseUrl}/items/${id}`, item);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/items/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
