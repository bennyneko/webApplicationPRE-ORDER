from django.shortcuts import render
from django.http import HttpResponse
import pyrebase

# config = {
#     'apiKey': "AIzaSyBat_Bady3nQhCdYJR5W3j6DNglScvxw6M",
#     'authDomain': "cn334-a9cdd.firebaseapp.com",
#     'projectId': "cn334-a9cdd",
#     'storageBucket': "cn334-a9cdd.appspot.com",
#     'messagingSenderId': "119019959737",
#     'appId': "1:119019959737:web:6fdcafc24c92a17cc37268",
#     'measurementId': "G-1FGMR7RK92"
# }
# firebase=pyrebase.initialize_app(config)
# authe = firebase.auth()
# database=firebase.database()

# print(database)

# Create your views here.
def ecommerce_index_view(request):
    # id = database.child('Product').child('id').get().val()
    '''This function render index page of ecommerce views'''
    return HttpResponse('Welcome to views!')
