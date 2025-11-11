import axios, { AxiosInstance } from 'axios';

export const API = axios.create({
  baseURL:  import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});


export const createApiClient = (accessToken: string | null): AxiosInstance => {
  console.log("Base URL : ", import.meta.env.VITE_API_BASE_URL)
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // You can change this to your backend URL like "http://localhost:5000"
    withCredentials: true, // Include cookies (important for refresh tokens)
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  // Add Authorization header dynamically before every request
  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Handle expired access tokens (401) globally
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401 && accessToken) {
        // TODO: refresh token logic here (if you have a /refresh endpoint)
        console.warn("Access token expired, please refresh token.");
      }
      return Promise.reject(error);
    }
  );

  return api;
};