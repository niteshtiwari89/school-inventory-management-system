import axios from 'axios';

const api = axios.create({
  baseURL: 'https://school-inventory-management-system-oujy.vercel.app/api', // Replace with your backend URL
});

export default api;
