<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;


#[Route('/api/products')]
final class ProductApiController extends AbstractController{
    #[Route(name: 'app_product_api_index', methods: ['GET'])]
    public function index(ProductRepository $productRepository, SerializerInterface $serializer): JsonResponse
    {
        $products = $productRepository->findAll();
        $jsonProductList = $serializer->serialize($products,'json');

        return new JsonResponse($jsonProductList, Response::HTTP_OK, [], true);
    }

    #[Route(name: 'app_product_api_new', methods: ['POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer, ValidatorInterface $validator): JsonResponse
    {
        $product = $serializer->deserialize($request->getContent(), Product::class, 'json');

        //Valider les contraintes propores aux attribus
        $errors = $validator->validate($product);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
    
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }
        $product->setCreatedAt(new \DateTimeImmutable());
        $product->setUpdatedAt(new \DateTimeImmutable());
        $entityManager->persist($product);
        $entityManager->flush();
        
        $jsonProduct = $serializer->serialize($product, 'json');

        return new JsonResponse($jsonProduct, Response::HTTP_CREATED, [], true);
    }

    #[Route('/{id}', name: 'app_product_api_show', methods: ['GET'])]
    public function show(Product $product, SerializerInterface $serialize): JsonResponse
    {
        $jsonProduct = $serialize->serialize($product, 'json');
        return new JsonResponse($jsonProduct, Response::HTTP_OK, [], true);

    }

    #[Route('/{id}', name: 'app_product_api_edit', methods: ['PATCH'])]
    public function edit(Request $request, Product $product, EntityManagerInterface $entityManager, SerializerInterface $serializer,  ValidatorInterface $validator): JsonResponse
    {
        $updatedProduct = $serializer->deserialize($request->getContent(), Product::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $product]);

        //Valider les contraintes propores aux attribus
        $errors = $validator->validate($product);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
    
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }
        $updatedProduct->setUpdatedAt(new \DateTimeImmutable());

        $entityManager->persist($updatedProduct);
        $entityManager->flush();
        
        $jsonProduct = $serializer->serialize($updatedProduct, 'json');

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }

    #[Route('/{id}', name: 'app_product_api_delete', methods: ['DELETE'])]
    public function delete(Request $request, Product $product, EntityManagerInterface $entityManager): JsonResponse
    {
        $entityManager->remove($product);
        $entityManager->flush();
        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }

}
