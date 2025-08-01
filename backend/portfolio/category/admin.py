from django.contrib import admin
from .models import Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'use_icon', 'image', 'type']
    prepopulated_fields = {'slug': ('name',)}
