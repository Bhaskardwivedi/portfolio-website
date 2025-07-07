# portfolio/contactus/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer
from django.core.mail import send_mail
from django.conf import settings

class ContactMessageCreateView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            send_mail(
                subject=serializer.validated_data['subject'],
                message=serializer.validated_data['message'],
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=['bhaskardwivedi544@gmail.com'],
                fail_silently=False,
            )

            return Response({'message': 'Sent successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
