from django.http.response import JsonResponse, HttpResponse
from api.models import Product, Category


def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
    # return HttpResponse('HOME PAGE')


def product_detail(request, product_id):
    products = Product.objects.all()
    products_list = [p.to_json() for p in products]
    for product in products_list:
        if product['id'] == product_id:
            return JsonResponse(product)

    return JsonResponse({'error': 'Product not found'})
    # return HttpResponse('detail of product PAGE')


def category_list(request):
    category = Category.objects.all()
    categories_to_json = [p.to_json() for p in category]
    return JsonResponse(categories_to_json, safe=False)
    # return HttpResponse('categories PAGE')


def category_detail(request, category_id):
    category = Category.objects.all()
    categories_to_json = [p.to_json() for p in category]
    for one_category in categories_to_json:
        if one_category['id'] == category_id:
            return JsonResponse(one_category)

    return JsonResponse({'error': 'Product not found'})
    # return HttpResponse('category detail PAGE')


def products_by_category(request, category_id):
    categories = Category.objects.all()
    categories_list = [c.to_json() for c in categories]
    category_name = ''
    for category in categories_list:
        if category['id'] == category_id:
            category_name = category['name']
    products = Product.objects.all()
    products_list = [p.to_json() for p in products]
    selected_products = []
    for product in products_list:
        if product['description'] == category_name:
            selected_products.append(product)
    if selected_products:
        return JsonResponse(selected_products, safe = False)
    return JsonResponse({'error': 'Products not found'})

