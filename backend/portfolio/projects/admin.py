from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'order']
    list_filter = ['category', 'is_featured']
    search_fields = ['title', 'description', 'tech_stack']
    prepopulated_fields = {'slug': ('title',)}
