export default interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
    quantity: number;
    internalReference: string;
    shellId: number;
    inventoryStatus: "INSTOCK" | "OUTOFSTOCK" | "LOWSTOCK";
    rating: number;
    createdAt: number;
    updatedAt: number;
}