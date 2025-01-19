import React, {useEffect, useState } from 'react';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../services/api';

const ProductListpage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(false);

    //Charger toutes les catégories au chargement du composant

    useEffect(() => {
        fetchCategories()
            .then((response) => {
                const categoryList = response.data.map((category) => category.category);
                setCategories(categoryList);})
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [categoriesResponse, productsResponse] = await Promise.all([
                    fetchCategories(),
                    fetchProducts()
                ]);
                const categoryList = categoriesResponse.data.map((category) => category.category);
                setCategories(categoryList);
                setProducts(productsResponse.data);
                
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if(selectedCategory === 'All')  return;

        const fetchProductsByCategoryList = async (category) => {
            setIsLoading(true);
            try {
                const response = await fetchProductsByCategory(category);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProductsByCategoryList(selectedCategory);
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
                {isLoading ? <p>Loading...</p> :
                products.length > 0 ? 
                    ( products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <a className='link-to-product' href={ `/products/${product.id}` }>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p><strong>Prix: </strong> {product.price}€</p>
                        </a>
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
