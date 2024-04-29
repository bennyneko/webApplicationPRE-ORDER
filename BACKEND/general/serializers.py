from rest_framework import serializers
from .models import Product
#เบนนี่ทำต่อvvv
from .models import Customer
from .models import Payment
from .models import Shipping
from .models import Order
from .hashtag import Hashtags

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['sku', 'name', 'type', 'description','price', 'quantity', 'image', 'start_preorder_date','end_preorder_date', 'status']
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
    def product_detail(request, product_id):
        product = Product.objects.get(pk=product_id)
        Hashtags = Hashtags(product.name)
        product.description += " ".join(Hashtags)
        return render(request, 'product_detail.html', {'product': product})
#เบนนี่ทำต่อvvv   

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