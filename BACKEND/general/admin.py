from django.contrib import admin
from general.models import Product
from general.models import Customer
from general.models import Order 
from general.models import Payment
from general.models import Shipping
# Register your models here.
admin.site.register(Product)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(Payment)
admin.site.register(Shipping)