from django.db import models 
from django.utils.text import slugify

class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField() 
    slug = models.SlugField(unique=True, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True) 
    is_published = models.BooleanField(default=True)
    

    def save(self, *args, **kwargs): 
        if not self.slug: 
            self.slug = slugify(self.title)
        super(Blog, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


    