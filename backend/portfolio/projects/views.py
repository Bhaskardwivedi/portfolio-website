from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from .models import Project
from .serializers import ProjectSerializer 


def ProjectList(request):
    projects = list(Project.objects.values())  # ✅ Database se projects fetch kar rahe hain
    return JsonResponse(projects, safe=False) 
