# from django.shortcuts import render
# from django.http import HttpResponse ,JsonResponse
from general.models import Product
# from django.views.decorators.csrf import csrf_exempt
from general.serializers import ProductSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Customer
from .serializers import CustomerSerializer

# # Create your views here.
# @csrf_exempt
# def ecommerce_index_view(request, id=None):
#     products = Product.objects.all()

#     # สร้าง Dictionary เพื่อเก็บข้อมูลสินค้า
#     products_dict = {}
#     for product in products:
#         product_data = {
#             'sku': str(product.sku),
#             'name': str(product.name),
#             'description': product.description,
#             'price': str(product.price),
#             'quantity': product.quantity,
#             'image_url': product.image.url if product.image else None,
#             'start_preorder_date': product.start_preorder_date.isoformat(),
#             'end_preorder_date': product.end_preorder_date.isoformat(),
#             'status': product.status,  # หากมีฟิลด์ type
#         }
#         products_dict[product.sku] = product_data

#     if request.method == 'GET':
#         if id is not None:
#             try:
#                 product_data = products_dict.get(int(id))
#                 if product_data:
#                     return JsonResponse(product_data)
#                 else:
#                     return JsonResponse({'error': 'Product not found'}, status=404)
#             except ValueError:
#                 return JsonResponse({'error': 'Invalid product ID'}, status=400)
#         else:
#             return JsonResponse(products_dict)
#     else:
#         return JsonResponse({'message': 'This is a data source for product information'})
    
# @csrf_exempt
# def ecommerce_add_view(request):
#     if request.method == 'POST':
#         return JsonResponse({'message': 'Add data'}) #เพิ่มข้อมูลน้าาาาา
#     else:
#         return JsonResponse({'message': 'This is a data source for product information'})


class ProductAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        product = self.get_object(pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class ProductSearchAPIView(APIView):
    def get(self, request):
        name = request.query_params.get('name')
        type = request.query_params.get('type')
        min_price = request.query_params.get('min_price')
        max_price = request.query_params.get('max_price')

        products = Product.objects.all()

        if name:
            products = products.filter(name__icontains=name)
        if type:
            products = products.filter(type__icontains=type)
        if min_price:
            products = products.filter(price__gte=min_price)
        if max_price:
            products = products.filter(price__lte=max_price)

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class CustomerAPIView(APIView):
    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

class OrderAPIView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
    
class PaymentAPIView(APIView):
    def post(self, request):
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        payments = Payment.objects.all()
        serializer = PaymentSerializer(payments, many=True)
        return Response(serializer.data)
    
class ShippingAPIView(APIView):
    def post(self, request):
        serializer = ShippingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        shippings = Shipping.objects.all()
        serializer = ShippingSerializer(shippings, many=True)
        return Response(serializer.data)
