import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const fetchProducts = () => api.get('/api/products');
export const addProduct = (product) => api.post('/api/products', product);
export const fetchProductById = (id) => api.get(`/api/products/${id}`);
export const updateProduct = async (id, product) => {
    try {
        const response = await api.patch(`/api/products/${id}`, product);
        return response.data;
    }
    // Gestion des erreurs
    catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Error updating product');
    }
};
export const deleteProduct = async (id) => {
    try {
        console.log('Deleting product:', id);
        const response = await api.delete(`/api/products/${id}`);
        console.log('Product deleted:', response);
        return response.data;
    }   
    catch (error) {
        console.error('Error deleting product:', error);
        throw new Error('Error deleting product');
    }
};
export const fetchCategories = () => api.get('/product/operation/categories');
export const fetchProductsByCategory = (category) => api.get(`/product/operation/category?category=${category}`);
export default api;