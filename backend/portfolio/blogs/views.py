from rest_framework import generics
from .models import Blog
from .serializers import BlogSerializer 
from .serializers import BlogListSerializer 
from rest_framework.generics import RetrieveAPIView  
from rest_framework import viewsets, permissions


class BlogListAPIView(generics.ListAPIView):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogListSerializer

class BlogDetailAPIView(generics.RetrieveAPIView):
    queryset = Blog.objects.all() 
    serializer_class = BlogSerializer 
    lookup_field = 'id'

class BlogCreateAPIView(generics.CreateAPIView): 
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer 

class BlogUpdateAPIView(generics.UpdateAPIView):
    queryset = Blog.objects.all() 
    serializer_class = BlogSerializer 
    lookup_field = 'id' 

class BlogDeleteAPIView(generics.DestroyAPIView): 
    queryset = Blog.objects.all() 
    serializer_class = BlogSerializer 
    lookup_field = 'id'    
class BlogDetailBySlugAPIView(generics.RetrieveAPIView): 
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug' 

class BlogDetailAPIView(RetrieveAPIView): 

    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug' 

class IsAdminOrReadOnly(permissions.BasePermission): 

    def has_permission(self, request, view): 

        if request.method in permissions.SAFE_METHODS: 
            return True
        
        return request.user and request.user.is_staff  

class BlogViewSet(viewsets.ModelViewSet):

    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer
    permission_classes = [IsAdminOrReadOnly]    



