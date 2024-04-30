from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Product, Customer, Order, Payment, Shipping
from .serializers import ProductSerializer, CustomerSerializer, OrderSerializer, PaymentSerializer, ShippingSerializer

class ProductAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.product_data = {'name': 'Test Product', 'price': 100}
        self.product = Product.objects.create(**self.product_data)

    def test_product_list(self):
        response = self.client.get(reverse('product-list'))
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_product_detail(self):
        response = self.client.get(reverse('product-detail', args=[self.product.id]))
        serializer = ProductSerializer(self.product)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_product_create(self):
        response = self.client.post(reverse('product-list'), self.product_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Product.objects.count(), 2)

    def test_product_update(self):
        updated_data = {'name': 'Updated Test Product', 'price': 200}
        response = self.client.put(reverse('product-detail', args=[self.product.id]), updated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Product.objects.get(id=self.product.id).name, 'Updated Test Product')

    def test_product_delete(self):
        response = self.client.delete(reverse('product-detail', args=[self.product.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Product.objects.count(), 0)
        
class CustomerAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.customer_data = {'name': 'Test Customer', 'email': 'test@example.com', 'phone_number': '123456789', 'address': 'Test Address'}
        self.customer = Customer.objects.create(**self.customer_data)

    def test_customer_list(self):
        response = self.client.get(reverse('customer-list'))
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_customer_detail(self):
        response = self.client.get(reverse('customer-detail', args=[self.customer.id]))
        serializer = CustomerSerializer(self.customer)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_customer_create(self):
        new_customer_data = {'name': 'New Test Customer', 'email': 'newtest@example.com', 'phone_number': '987654321', 'address': 'New Test Address'}
        response = self.client.post(reverse('customer-list'), new_customer_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Customer.objects.count(), 2)

    def test_customer_update(self):
        updated_data = {'name': 'Updated Test Customer', 'email': 'updatedtest@example.com', 'phone_number': '999999999', 'address': 'Updated Test Address'}
        response = self.client.put(reverse('customer-detail', args=[self.customer.id]), updated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Customer.objects.get(id=self.customer.id).name, 'Updated Test Customer')

    def test_customer_delete(self):
        response = self.client.delete(reverse('customer-detail', args=[self.customer.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Customer.objects.count(), 0)

class OrderAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.customer_data = {'name': 'Test Customer', 'email': 'test@example.com', 'phone_number': '123456789', 'address': 'Test Address'}
        self.customer = Customer.objects.create(**self.customer_data)

        self.product_data = {'name': 'Test Product', 'price': 100}
        self.product = Product.objects.create(**self.product_data)

        self.order_data = {'customer': self.customer.id, 'product': self.product.id, 'quantity': 1, 'price': 100, 'order_date': '2024-04-30', 'order_status': 'WAITING_PAYMENT'}
        self.order = Order.objects.create(**self.order_data)

    def test_order_list(self):
        response = self.client.get(reverse('order-list'))
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_order_detail(self):
        response = self.client.get(reverse('order-detail', args=[self.order.id]))
        serializer = OrderSerializer(self.order)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_order_create(self):
        new_order_data = {'customer': self.customer.id, 'product': self.product.id, 'quantity': 2, 'price': 200, 'order_date': '2024-04-30', 'order_status': 'WAITING_PAYMENT'}
        response = self.client.post(reverse('order-list'), new_order_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Order.objects.count(), 2)

    def test_order_update(self):
        updated_data = {'customer': self.customer.id, 'product': self.product.id, 'quantity': 2, 'price': 200, 'order_date': '2024-04-30', 'order_status': 'PAID'}
        response = self.client.put(reverse('order-detail', args=[self.order.id]), updated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Order.objects.get(id=self.order.id).order_status, 'PAID')

    def test_order_delete(self):
        response = self.client.delete(reverse('order-detail', args=[self.order.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Order.objects.count(), 0)

class PaymentAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.customer_data = {'name': 'Test Customer', 'email': 'test@example.com', 'phone_number': '123456789', 'address': 'Test Address'}
        self.customer = Customer.objects.create(**self.customer_data)

        self.product_data = {'name': 'Test Product', 'price': 100}
        self.product = Product.objects.create(**self.product_data)

        self.order_data = {'customer': self.customer.id, 'product': self.product.id, 'quantity': 1, 'price': 100, 'order_date': '2024-04-30', 'order_status': 'WAITING_PAYMENT'}
        self.order = Order.objects.create(**self.order_data)

        self.payment_data = {'order': self.order.id, 'payment_method': 'Credit Card', 'amount': 100, 'payment_date': '2024-04-30'}
        self.payment = Payment.objects.create(**self.payment_data)

    def test_payment_list(self):
        response = self.client.get(reverse('payment-list'))
        payments = Payment.objects.all()
        serializer = PaymentSerializer(payments, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_payment_detail(self):
        response = self.client.get(reverse('payment-detail', args=[self.payment.id]))
        serializer = PaymentSerializer(self.payment)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_payment_create(self):
        new_payment_data = {'order': self.order.id, 'payment_method': 'Debit Card', 'amount': 100, 'payment_date': '2024-04-30'}
        response = self.client.post(reverse('payment-list'), new_payment_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Payment.objects.count(), 2)

    def test_payment_update(self):
        updated_data = {'order': self.order.id, 'payment_method': 'Debit Card', 'amount': 200, 'payment_date': '2024-04-30'}
        response = self.client.put(reverse('payment-detail', args=[self.payment.id]), updated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Payment.objects.get(id=self.payment.id).amount, 200)

    def test_payment_delete(self):
        response = self.client.delete(reverse('payment-detail', args=[self.payment.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Payment.objects.count(), 0)

class ShippingAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.customer_data = {'name': 'Test Customer', 'email': 'test@example.com', 'phone_number': '123456789', 'address': 'Test Address'}
        self.customer = Customer.objects.create(**self.customer_data)

        self.product_data = {'name': 'Test Product', 'price': 100}
        self.product = Product.objects.create(**self.product_data)

        self.order_data = {'customer': self.customer.id, 'product': self.product.id, 'quantity': 1, 'price': 100, 'order_date': '2024-04-30', 'order_status': 'WAITING_PAYMENT'}
        self.order = Order.objects.create(**self.order_data)

        self.shipping_data = {'order': self.order.id, 'recipient_name': 'Test Recipient', 'shipping_address': 'Test Shipping Address', 'recipient_phone_number': '987654321', 'courier_company': 'Test Courier', 'tracking_number': '123456789', 'shipping_date': '2024-04-30'}
        self.shipping = Shipping.objects.create(**self.shipping_data)

    def test_shipping_list(self):
        response = self.client.get(reverse('shipping-list'))
        shippings = Shipping.objects.all()
        serializer = ShippingSerializer(shippings, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_shipping_detail(self):
        response = self.client.get(reverse('shipping-detail', args=[self.shipping.id]))
        serializer = ShippingSerializer(self.shipping)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_shipping_create(self):
        new_shipping_data = {'order': self.order.id, 'recipient_name': 'New Test Recipient', 'shipping_address': 'New Test Shipping Address', 'recipient_phone_number': '987654321', 'courier_company': 'New Test Courier', 'tracking_number': '987654321', 'shipping_date': '2024-04-30'}
        response = self.client.post(reverse('shipping-list'), new_shipping_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Shipping.objects.count(), 2)

    def test_shipping_update(self):
        updated_data = {'order': self.order.id, 'recipient_name': 'Updated Test Recipient', 'shipping_address': 'Updated Test Shipping Address', 'recipient_phone_number': '987654321', 'courier_company': 'Updated Test Courier', 'tracking_number': '987654321', 'shipping_date': '2024-04-30'}
        response = self.client.put(reverse('shipping-detail', args=[self.shipping.id]), updated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Shipping.objects.get(id=self.shipping.id).recipient_name, 'Updated Test Recipient')

    def test_shipping_delete(self):
        response = self.client.delete(reverse('shipping-detail', args=[self.shipping.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Shipping.objects.count(), 0)


      
