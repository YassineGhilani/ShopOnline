import { React, useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById, updateProduct, deleteProduct } from "../services/api";

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetchProductById(id);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Error fetching product');
            }
        };
        fetchProduct();
    }, [id]);

    
    const cleanedProduct = product ?  {
        ...product,
        price: product.price ? parseFloat(product.price) : 0, // Défaut à 0 si undefined
        quantity: product.quantity ? parseInt(product.quantity, 10) : 0,
        shellId: product.shellId ? parseInt(product.shellId, 10) : 0,
        rating: product.rating ? parseInt(product.rating, 10) : 0,
    }: null;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('Product:', cleanedProduct, id);
            await updateProduct(id, cleanedProduct);
            alert('Produit mis à jour avec succès');
            navigate('/products');
            setError(null);
        } catch (error) {
            console.error('Error updating product:', error);
            setError('Error updating product');
        }
    };
    const handleDelete = async () => {
        const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce produit?');
        if (!confirmDelete) {
            return;
        }
        try {
            console.log('enter try block');
            deleteProduct(id);
            alert('Produit supprimé avec succès');
            navigate('/products');
        } catch (error) {
            console.error('Error deleting product:', error);
            setError('Error deleting product');
        }
    };


    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <header>
                <h1>Modifier le produit</h1>
            </header>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="code">Code</label>
                    <input type="text" id="code" name="code" value={product.code} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={product.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Prix</label>
                    <input type="number" id="price" name="price" value={product.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="image" value={product.image} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="category">Catégorie</label>
                    <input type="text" id="category" name="category" value={product.category} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="quantity">Quantité</label>
                    <input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="internalReference">Référence interne</label>
                    <input type="text" id="internalReference" name="internalReference" value={product.internalReference} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="shellId">Shell ID</label>
                    <input type="number" id="shellId" name="shellId" value={product.shellId} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="inventoryStatus">Statut d'inventaire</label>
                    <select id="inventoryStatus" name="inventoryStatus" value={product.inventoryStatus} onChange={handleChange}>
                        <option value="INSTOCK">En stock</option>
                        <option value="OUTOFSTOCK">En rupture de stock</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="rating">Évaluation</label>
                    <input type="number" id="rating" name="rating" value={product.rating} onChange={handleChange} />
                </div>
                <button type="submit">Mettre à jour</button>
                <button type="button" onClick={handleDelete} style={{ color:'red' }}>Supprimer</button>
            </form>
        </div>
    );
};

export default EditProductPage;