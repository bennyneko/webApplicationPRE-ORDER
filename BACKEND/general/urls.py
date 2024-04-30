from django.urls import path, include
from .views import *

urlpatterns = [
    path('product/', ProductAPIView.as_view()),
    path('products/search/', ProductSearchAPIView.as_view()),
    path('customers/', CustomerAPIView.as_view()),
    path('orders/', OrderAPIView.as_view()),
    path('payments/', PaymentAPIView.as_view()),
    path('shippings/', ShippingAPIView.as_view())
]  