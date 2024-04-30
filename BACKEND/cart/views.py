from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import CartItem
from products.models import Product  # Import Product model

@login_required
def view_cart(request):
    cart_items = CartItem.objects.filter(user=request.user)
    return render(request, 'cart/cart.html', {'cart_items': cart_items})

@login_required
def add_to_cart(request, product_id):
    if request.method == 'POST':
        product = Product.objects.get(pk=product_id)
        cart_item, created = CartItem.objects.get_or_create(user=request.user, product=product)
        if not created:
            cart_item.quantity += 1
            cart_item.save()
        return redirect('view_cart')

@login_required
def remove_from_cart(request, item_id):
    CartItem.objects.get(pk=item_id).delete()
    return redirect('view_cart')

@login_required
def update_cart(request, item_id):
    if request.method == 'POST':
        cart_item = CartItem.objects.get(pk=item_id)
        cart_item.quantity = request.POST['quantity']
        cart_item.save()
        return redirect('view_cart')
