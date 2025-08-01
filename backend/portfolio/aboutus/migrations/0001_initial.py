# Generated by Django 5.2 on 2025-06-11 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('years_of_experience', models.PositiveIntegerField()),
                ('total_projects', models.PositiveIntegerField()),
                ('total_clients', models.PositiveIntegerField()),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='about_images/')),
                ('resume', models.FileField(blank=True, null=True, upload_to='resumes/')),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
