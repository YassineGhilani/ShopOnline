<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;

class ProductOperationController extends AbstractController
{
    #[Route('/product/operation', name: 'app_product_operation')]
    public function index(): Response
    {
        return $this->render('product_operation/index.html.twig', [
            'controller_name' => 'ProductOperationController',
        ]);
    }

    #[Route('/product/operation/category', name: 'app_product_operation_category', methods: ['GET'])]
    public function filterByCategory(Request $request,ProductRepository $productRepository,SerializerInterface $serializer): JsonResponse
    {
        $category = $request->query->get('category');
        $products = $productRepository->findProductByCategory($category);
        $jsonProductList = $serializer->serialize($products,'json');

        return new JsonResponse($jsonProductList, Response::HTTP_OK, [], true);
    }    

    #[Route('/product/operation/categories', name: 'app_product_operation_categories', methods: ['GET'])]
    public function getAllCategories(ProductRepository $productRepository, SerializerInterface $serializer): JsonResponse
    {
        $categories = $productRepository->findAllProductCategories();
        $jsonCategoriesList = $serializer->serialize($categories,'json');
        return new JsonResponse($jsonCategoriesList, Response::HTTP_OK, [], true);
    }
}
