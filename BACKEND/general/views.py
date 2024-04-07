from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from general.models import Product

# Create your views here.
# @csrf_exempt
def ecommerce_index_view(request, id=None):
    products = Product.objects.all()

    # สร้างลิสต์ของข้อมูลสินค้า
    products_list = []
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
        products_list.append(product_data)

    if request.method == 'GET':
        if id is not None:
            try:
                number = int(id) - 1
                product_data = products_list[int(number)]
                return JsonResponse(product_data, safe=False)
            except IndexError:
                return JsonResponse({'error': 'Product not found'}, status=404)
        else:
            return JsonResponse(products_list, safe=False)
    else:
        return JsonResponse("Hello this is a data source title name product")
