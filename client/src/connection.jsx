import axios from 'axios';

const api = axios.create({
  baseURL: 'https://school-inventory-management-system-oujy.vercel.app/', // Replace with your backend URL
  withCredentials: true,
});

export default api;
