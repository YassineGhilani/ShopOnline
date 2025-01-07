import React, { use, useEffect, useState } from 'react';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../services/api';

const ProductListpage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    //Charger toutes les catégories au chargement du composant

    useEffect(() => {
        fetchCategories()
            .then((response) => {
                const categoryList = response.data.map((category) => category.category);
                setCategories(categoryList);})
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    useEffect(() => {
       const fetchProductsList = async () => {
              try {
                const response = selectedCategory !== 'All'
                ? await fetchProductsByCategory(selectedCategory)
                : await fetchProducts();
                setProducts(response.data);
              } catch (error) {
                console.error('Error fetching products:', error);
              }
         };
         fetchProductsList();
    }, [selectedCategory]);

    // Gestion du chargement de catégories
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    
    return (
        <div>
            <header>            
                <h1>Product List</h1>
                <div className='select-container'>
                    <label htmlFor="category-select">Séléctionner une catégorie</label>
                    <select id='category-select' value={selectedCategory} onChange={handleCategoryChange}>
                        <option value='All'>Toutes les catégories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                
            </header>
            <div className='product-list'>
                {products.length > 0 ? 
                    ( products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Prix: </strong> {product.price}€</p>
                        <button>Ajouter au panier</button>
                    </div>
                
                    
            ))
        ) : (
            <p>Aucun produit trouvé.</p>
        )}
            </div>
        </div>
    );
};

export default ProductListpage;
