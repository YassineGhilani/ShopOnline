import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const fetchProducts = () => api.get('/api/products');
export const fetchProductById = (id) => api.get(`/api/products/${id}`);
export const fetchCategories = () => api.get('/product/operation/categories');
export const fetchProductsByCategory = (category) => api.get(`/product/operation/category?category=${category}`);
export default api;