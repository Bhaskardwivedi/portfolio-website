from django.db import models
from django.utils.text import slugify

PROJECT_CATEGORIES = [
    ('ai_automation', 'AI Agent / Chatbot'),
    ('data_engineering', 'ETL & Data Pipeline'),
    ('dashboard', 'BI Dashboard & Analytics'),
    ('automation', 'Task Automation'),
    ('web', 'Web App / Admin Panel'),
]

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    category = models.CharField(max_length=50, choices=PROJECT_CATEGORIES)
    description = models.TextField()
    features = models.JSONField(default=list, help_text="Bullet points of what this project does")
    tech_stack = models.JSONField(default=list, null=True, blank=True)
    github_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Project, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
