from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__' 

class BlogListSerializer(serializers.ModelSerializer):
    summary = serializers.SerializerMethodField() 

    class Meta: 
        model = Blog 
        fields = ['id', 'title', 'summary', 'created_at'] 

    def get_summary(self, obj):
        return obj.content[:100] + '...' if len(obj.content) > 100 else obj.content
      