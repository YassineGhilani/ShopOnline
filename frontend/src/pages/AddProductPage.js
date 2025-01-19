import React, {useState} from "react";
import { addProduct } from "../services/api";

const AddProductPage = () => {
    const [product, setProduct] = useState({
        code: '',
        name: '',
        description: '',
        price: 0,
        image: '',
        category: '',
        price: 0,
        quantity: 0,
        internalReference: '',
        shellId: 0,
        inventoryStatus: 'INSTOCK',
        rating: 0,
    });

    const cleanedProduct = {
        ...product,
        price: parseFloat(product.price), // Convertir le prix en float
        quantity: parseInt(product.quantity, 10), // Convertir la quantité en entier
        shellId: parseInt(product.shellId, 10), // Convertir shellId en entier
        rating: parseInt(product.rating), // Convertir l'évaluation en float
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('Product:', cleanedProduct);
            await addProduct(cleanedProduct);
            alert('Produit ajouté avec succès');
            setProduct({
                code: '',
                name: '',
                description: '',
                price: 0,
                image: '',
                category: '',
                price: 0,
                quantity: 0,
                internalReference: '',
                shellId: 0,
                inventoryStatus: 'INSTOCK',
                rating: 0,
            });
            setError(null);
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product');
        }
    };


return (
    <div className="add-page edit-add-product container" style={{maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
        <h2>Ajouter un produit</h2>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom: '10px'}}>
                <label>Code:</label>
                <input type="text" name="code" value={product.code} onChange={handleChange} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Nom:</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Description:</label>
                <textarea name="description" value={product.description} onChange={handleChange} required /> 
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Prix:</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Catégorie:</label>
                <input type="text" name="category" value={product.category} onChange={handleChange} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Image:</label>
                <input type="text" name="image" value={product.image} onChange={handleChange} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Quantité:</label>
                <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Référence interne:</label>
                <input type="text" name="internalReference" value={product.internalReference} onChange={handleChange} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Id de la coque:</label>
                <input type="number" name="shellId" value={product.shellId} onChange={handleChange} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Statut d'inventaire:</label>
                <select name="inventoryStatus" value={product.inventoryStatus} onChange={handleChange}>
                    <option value="INSTOCK">En stock</option>
                    <option value="OUTOFSTOCK">En rupture de stock</option>
                    <option value="LOWSTOCK">Stock faible</option>
                </select>
            </div>
            <div style={{marginBottom: '10px'}}>
                <label>Évaluation:</label>
                <input type="number" name="rating" value={product.rating} onChange={handleChange} min="0" max="5"  required />
            </div>
            <button type="submit">Ajouter</button>
        </form>
    </div>
    );
};
export default AddProductPage;