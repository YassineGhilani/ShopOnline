import Product from '@/types';
import { Metadata } from 'next';
import { getStaticProps } from 'next/dist/build/templates/pages';

export const metadata: Metadata = {
    title: "Produits",
    description: "Liste des produits disponibles",
};

export default async function getProducts() {
    const response = await fetch(`${process.env.SERVER_APP_API_URL}/api/products`);
    const products = await response.json();
    return (

        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4">Liste des Produits</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product: Product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600 mb-2">{product.description || 'Pas de description disponible.'}</p>
                            <p className="text-sm text-gray-500">Catégorie: {product.category}</p>
                            <p className="mt-2 text-lg font-bold">{product.price} €</p>
                            <p
                                className={`mt-2 text-sm font-medium ${product.inventoryStatus === 'INSTOCK'
                                        ? 'text-green-600'
                                        : product.inventoryStatus === 'LOWSTOCK'
                                            ? 'text-yellow-600'
                                            : 'text-red-600'
                                    }`}
                            >
                                {product.inventoryStatus === 'INSTOCK'
                                    ? 'En Stock'
                                    : product.inventoryStatus === 'LOWSTOCK'
                                        ? 'Stock Faible'
                                        : 'Rupture de Stock'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
