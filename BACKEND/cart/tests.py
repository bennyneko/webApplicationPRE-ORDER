from django.test import TestCase
from django.contrib.auth.models import User
from general.models import Product
from .models import CartItem

class CartItemTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.product = Product.objects.create(name='Test Product', price=100)

    def test_cart_item_creation(self):
        cart_item = CartItem.objects.create(user=self.user, product=self.product, quantity=2)
        self.assertEqual(cart_item.user, self.user)
        self.assertEqual(cart_item.product, self.product)
        self.assertEqual(cart_item.quantity, 2)

    def test_cart_item_str(self):
        cart_item = CartItem.objects.create(user=self.user, product=self.product, quantity=3)
        expected_str = f"{self.product.name} - 3"
        self.assertEqual(str(cart_item), expected_str)
