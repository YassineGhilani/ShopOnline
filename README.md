J'ai réalisé le travail ci-dessous, vous trouverez dans le dossier /product_api_project le projet en Symfony 7 et React tout en respectant les contraintes mentionnées ci-dessous.

## Front-end
J'ai développé une application avec React qui permet d'afficher les produits gérés en backend.
## Back-end

Développer un back-end permettant la gestion de produits définis plus bas.

- PHP/Symphony


Le back-end gére les API suivantes : 

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**      | Create a new product  | Retrieve all products          | X                                        | X   |     X            |
| **/products/:id**  | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |

Un produit a les caractéristiques suivantes : 

``` typescript
class Product {
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
  inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK";
  rating: number;
  createdAt: number;
  updatedAt: number;
}
```
