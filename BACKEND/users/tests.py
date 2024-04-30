from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import User
from .serializers import UserSerializer
import jwt

class UserAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {'name': 'Test User', 'username': 'testuser', 'password': 'testpassword'}
        self.user = User.objects.create_user(username=self.user_data['username'], password=self.user_data['password'], name=self.user_data['name'])

    def test_register_user(self):
        response = self.client.post(reverse('register'), self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)

    def test_login_user(self):
        response = self.client.post(reverse('login'), self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('jwt', response.cookies)
        # Decode token and verify username
        token = response.cookies['jwt'].value
        decoded_token = jwt.decode(token, 'secret', algorithms=['HS256'])
        self.assertEqual(decoded_token['username'], self.user_data['username'])

    def test_get_user_detail(self):
        self.client.login(username=self.user_data['username'], password=self.user_data['password'])
        response = self.client.get(reverse('user-detail'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        serializer = UserSerializer(self.user)
        self.assertEqual(response.data, serializer.data)

    def test_logout_user(self):
        response = self.client.post(reverse('logout'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertNotIn('jwt', response.cookies)

