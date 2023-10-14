// authApi.js

import axios from 'axios'; // Import Axios
import { API_BASE_URL } from './apiConfig'; // Import your API configuration

async function registerUserApi(body) {
  const response = await axios.post(`${API_BASE_URL}/register`, body);
  return response;
}

async function loginUserApi(body) {
  const response = await axios.post(`${API_BASE_URL}/login`, body);
  return response;
}

async function getUserProfile(token) {
  try {
    const response = await axios.get(`${API_BASE_URL}/me`, { headers: { Authorization: `Bearer ${token}` } });

    if (response.status === 200) {
      // Login successful
      return response;
    }
    throw new Error('Login failed. Please check your credentials.');
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.');
  }
}

export { registerUserApi, loginUserApi, getUserProfile };
