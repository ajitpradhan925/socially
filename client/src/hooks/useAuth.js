// useAuth.js

import { useEffect, useState } from 'react';
import { loginUserApi, registerUserApi } from '../api';
import { getUserProfile } from '../api/authApi';
// Define a key for the local storage item
const LOCAL_STORAGE_KEY = 'authToken';

function useAuth(successCallback) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      // Make a GET request to retrieve all posts
      const postsResponse = await getUserProfile(token);
      if (postsResponse.status !== 200) {
        throw new Error('Failed to retrieve posts.');
      }

      setUser(postsResponse.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);
  useEffect(() => {
    // Retrieve the token from local storage on component mount
    const storedToken = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  async function registerUser(username, password) {
    setLoading(true);
    setError(null);

    try {
      // Simulate an API call for user registration
      await registerUserApi(username, password);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      // Call the success callback
      if (successCallback) {
        successCallback();
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  async function loginUser(body) {
    setLoading(true);
    setError(null);

    try {
      // Simulate an API call for user login
      const response = await loginUserApi(body);
      setLoading(false);
      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem(LOCAL_STORAGE_KEY, newToken);
      setIsLoggedIn(true);
      // Call the success callback
      if (successCallback) {
        successCallback();
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  const logout = (navigate) => {
    // Remove the token from state and local storage
    setToken(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setIsLoggedIn(false);
    navigate('/login');
  };

  return {
    loading,
    error,
    registerUser,
    loginUser,
    logout,
    token,
    isLoggedIn,
    user,
  };
}

// ... Rest of the code remains the same
export default useAuth;
