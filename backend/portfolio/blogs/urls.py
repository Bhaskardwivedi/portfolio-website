from django.urls import path
from .views import BlogListAPIView, BlogDetailAPIView, BlogCreateAPIView, BlogUpdateAPIView, BlogDeleteAPIView, BlogDetailBySlugAPIView
from . import views
urlpatterns = [
    path('', BlogListAPIView.as_view(), name='blog-list'), 
    path('<int:id>/', BlogDetailAPIView.as_view(), name = 'blog-detail'), 
    path('create/', BlogCreateAPIView.as_view(), name='blog-create'), 
    path('update/<int:id>/', BlogUpdateAPIView.as_view(), name='update-blog'), 
    path('delete/<int:id>/', BlogDeleteAPIView.as_view(), name='delete-blog'), 
    path('<slug:slug>/', BlogDetailBySlugAPIView.as_view(), name='blog-detail-slug'),   
    path('', views.BlogListAPIView.as_view(), name='blog-list'),  
    path('<slug:slug>/', views.BlogDetailAPIView.as_view(), name= 'blog-detail'),
    
]