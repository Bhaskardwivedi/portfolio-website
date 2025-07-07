from rest_framework import serializers
from .models import contactMessage

class ContactMessageSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = contactMessage 
        fields = '__all__'
        

