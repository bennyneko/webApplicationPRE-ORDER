from rest_framework import serializers
from .models import Product
from .models import Customer
from .models import Payment
from .models import Shipping
from .models import Order
from django.test import TestCase
from .serializers import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['sku', 'name', 'type', 'description','price', 'quantity', 'image', 'start_preorder_date','end_preorder_date', 'status']
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
    
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['customer_id','name','email','phone_number','address']
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
     
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['payment_id','order','payment_method','amount','payment_date']
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
    
class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = ['shipping_id','order','recipient_name','shipping_address','recipient_phone_number','courier_company','tracking_number','shipping_date']
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance    
    
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['order_id', 'customer', 'product', 'quantity', 'price', 'order_date', 'order_status']
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class ProductSerializerTestCase(TestCase):
    def setUp(self):
        self.product_data = {'name': 'Test Product', 'price': 100}
        self.serializer = ProductSerializer(data=self.product_data)

    def test_create_valid_data(self):
        self.assertTrue(self.serializer.is_valid())
        self.serializer.save()
        self.assertEqual(Product.objects.count(), 1)
        product = Product.objects.get()
        self.assertEqual(product.name, 'Test Product')
        self.assertEqual(product.price, 100)

    def test_create_invalid_data(self):
        invalid_data = {'name': 'Test Product'}
        serializer = ProductSerializer(data=invalid_data)
        self.assertFalse(serializer.is_valid())