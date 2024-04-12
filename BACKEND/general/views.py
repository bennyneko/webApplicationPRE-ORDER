from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from general.models import Product

# Create your views here.
# @csrf_exempt
def ecommerce_index_view(request, id=None):
    products = Product.objects.all()

    # สร้าง Dictionary เพื่อเก็บข้อมูลสินค้า
    products_dict = {}
    for product in products:
        product_data = {
            'sku': str(product.sku),
            'name': str(product.name),
            'description': product.description,
            'price': str(product.price),
            'quantity': product.quantity,
            'image_url': product.image.url if product.image else None,
            'start_preorder_date': product.start_preorder_date.isoformat(),
            'end_preorder_date': product.end_preorder_date.isoformat(),
            'status': product.status,  # หากมีฟิลด์ type
        }
        products_dict[product.sku] = product_data

    if request.method == 'GET':
        if id is not None:
            try:
                product_data = products_dict.get(id)
                if product_data:
                    return JsonResponse(product_data)
                else:
                    return JsonResponse({'error': 'Product not found'}, status=404)
            except ValueError:
                return JsonResponse({'error': 'Invalid product ID'}, status=400)
        else:
            return JsonResponse(products_dict)
    else:
        return JsonResponse({'message': 'This is a data source for product information'})