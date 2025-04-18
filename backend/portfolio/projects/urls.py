from django.urls import path
from .views import ProjectList

urlpatterns = [ 
    path('projects/', ProjectList, name='project-list'),
]