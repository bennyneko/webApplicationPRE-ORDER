from django.urls import path, include
from .views import *

urlpatterns = [
    path('product/', ProductAPIView.as_view()),
    path('products/search/', ProductSearchAPIView.as_view()),
]  