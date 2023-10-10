// authApi.js

import axios from 'axios'; // Import Axios
import { API_BASE_URL } from './apiConfig'; // Import your API configuration

async function createAPostApi(body, token) {
  try {
    const response = await axios.post(`${API_BASE_URL}/post`, body, { headers: { Authorization: `Bearer ${token}` } });

    return response;
  } catch (error) {
    throw new Error('Registration failed. Please try again.');
  }
}

async function getAllPosts(token) {
  try {
    console.log({ API_BASE_URL });
    const response = await axios.get(`${API_BASE_URL}/post`, { headers: { Authorization: `Bearer ${token}` } });

    if (response.status === 200) {
      // Login successful
      return response;
    }
    console.log({ response });
    throw new Error('Login failed. Please check your credentials.');
  } catch (error) {
    console.log({ error });
    throw new Error('Login failed. Please check your credentials.');
  }
}

export { createAPostApi, getAllPosts };
