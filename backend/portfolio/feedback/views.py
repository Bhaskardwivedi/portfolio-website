from rest_framework import generics
from .models import Feedback
from .serializers import FeedbackSerializer

class FeedbackCreateView(generics.CreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

class FeedbackListView(generics.ListAPIView):
    queryset = Feedback.objects.all().order_by('-created_at')[:20]
    serializer_class = FeedbackSerializer
