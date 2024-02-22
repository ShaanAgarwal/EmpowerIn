from django.urls import path
from .views import resumeUpload

urlpatterns = [
    path('resumeUpload/', resumeUpload, name='resumeUpload')
]