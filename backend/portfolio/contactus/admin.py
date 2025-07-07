from django.contrib import admin
from .models import contactMessage

@admin.register(contactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at']


