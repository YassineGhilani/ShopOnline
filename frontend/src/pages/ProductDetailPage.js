import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { fetchProductById } from "../services/api";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetchProductById(productId);
                setProduct(response.data);
                setIsLoading(false)
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getProduct();
    }, [productId]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching product: {error}</p>;
    if (!product) return <p>Product not found</p>;
    

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price} €</p>
            <button>Ajouter au panier</button>
        </div>
    );
}

export default ProductDetailPage;