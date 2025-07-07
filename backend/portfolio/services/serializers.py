from rest_framework import serializers
from .models import Service, ServiceFeature

# ✅ Feature serializer defined first
class ServiceFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceFeature
        fields = ['id', 'point']

# ✅ Service serializer
class ServiceSerializer(serializers.ModelSerializer):
    features = ServiceFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = '__all__'
        read_only_fields = ['slug', 'created_at', 'updated_at']  # ✅ corrected
