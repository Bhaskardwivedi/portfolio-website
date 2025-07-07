from typing import Iterable
from django.db import models
from django.utils.text import slugify

class Service(models.Model):
    CATEGORY_CHOICES = [
        ('ai_automation', 'AI-Powered Automation & Agents'),
        ('data_platform', 'Data Engineering & Intelligence'),
        ('business_insight', 'Business Intelligence & Analytics'),
        ('web_development_support', 'Custom Web Development & Support'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    tagline = models.CharField(max_length=300, blank=True, null=True, help_text="short punchline for service card")
    description = models.TextField(help_text="Detailed description of what this service offers")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    is_active = models.BooleanField(default=True)
    image = models.ImageField(upload_to='service_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Service, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
    
class ServiceFeature(models.Model):
    Service = models.ForeignKey('service', on_delete=models.CASCADE, related_name='features')
    point = models.CharField(max_length=255)

    def __str__(self):
        return self.point             
