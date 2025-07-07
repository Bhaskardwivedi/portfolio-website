from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer

class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all().order_by('order')
    serializer_class = ProjectSerializer