// Chemin: test_1-main/frontend/src/api/itemsAPI.js
import axios from 'axios';

const baseUrl = 'https://3001-automatic-yodel-qw499pwj7p4cxv9w.githubpreview.dev';

export const getAllItems = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createItem = async (item) => {
  try {
    const response = await axios.post(baseUrl, item);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, item);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    throw error;
  }
};
