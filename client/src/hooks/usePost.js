// usePostManagement.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAPostApi, getAllPosts } from '../api/postApi';
import { LOCAL_STORAGE_KEY, showErrorMessage, showSuccessMessage } from '../config';
// import axiosInstance from './apiConfig';
import useAuth from './useAuth';

function usePost() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  const fetchPosts = async () => {
    if (!isLoading) setLoading(true);
    try {
      // Make a GET request to retrieve all posts
      const postsResponse = await getAllPosts(token);
      if (postsResponse && postsResponse.status !== 200) {
        throw new Error('Failed to retrieve posts.');
      }

      setPosts(postsResponse.data);
    } catch (err) {
      // console.log(err);
      if (err.response) {
        showErrorMessage(err.response.data.message);
      } else {
        showErrorMessage(err.message);
      }

      if (err && err.response && err.response.status === 401) {
        navigate('/login');
        localStorage.clear(LOCAL_STORAGE_KEY);
      }
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (token) {
      fetchPosts();
    }
  }, [token]);

  const addPost = async (postContent) => {
    setLoading(true);
    setError(null);

    try {
      console.log({ token });
      // Make a POST request to add a new post
      const response = await createAPostApi(postContent, token);
      if (response.status !== 201) {
        throw new Error('Failed to add post.');
      }

      // Update the posts state with the new post
    //   setPosts(response.data);
    } catch (err) {
      setError(err.message);
      showErrorMessage(err.response.data.message);
      if (err.response.status === 401) {
        localStorage.clear(LOCAL_STORAGE_KEY);
        navigate('/login');
      }
    } finally {
      setLoading(false);
      fetchPosts();
      showSuccessMessage('Successfully Posted...');
    }
  };

  // eslint-disable-next-line no-unused-vars
  const addLike = async (postId) => {
    // Implement logic to add a like to a post
  };

  // eslint-disable-next-line no-unused-vars
  const addComment = async (postId, commentContent) => {
    // Implement logic to add a comment to a post
  };

  return {
    isLoading, error, posts, addPost, addLike, addComment,
  };
}

export default usePost;
