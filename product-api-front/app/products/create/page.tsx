import Form from 'next/form';
export default async function createProduct() {

    const response = await fetch(`${process.env.SERVER_APP_API_URL}/api/products`);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4">Créer un Produit</h1>
            <Form action="/api/products" className="grid grid-cols-1 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
                    <input type="text" name="code" id="code" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="description" name="description" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Prix</label>
                    <input type="number" name="price" id="price" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie</label>
                    <input type="text" name="category" id="category" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                    <input type="file" name="image" id="image" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantité</label>
                    <input type="number" name="quantity" id="quantity" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div>
                    <label htmlFor="internalReference" className="block text-sm font-medium text-gray-700">Référence Interne</label>
                    <input type="text" name="internalReference" id="internalReference" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div>
                    <label htmlFor="shellId" className="block text-sm font-medium text-gray-700">ID de la Coque</label>
                    <input type="number" name="shellId" id="shellId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="inventoryStatus" className="block text-sm font-medium text-gray-700">Statut du Stock</label>
                    <select id="inventoryStatus" name="inventoryStatus" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>INSTOCK</option>
                        <option>OUTOFSTOCK</option>
                        <option>LOWSTOCK</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Note</label>
                    <input type="number" name="rating" id="rating" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <button type="submit" className="inline-block bg-blue-500 ex-lg hover:bg-blue-600 text-white font-bold py-3 px-6 rounded ttransition duration-200">
                        Créer
                    </button>
                </div>
            </Form>

        </div>
    );


}

