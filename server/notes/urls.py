from django.urls import path, include
from rest_framework.routers import DefaultRouter
from notes import views

router = DefaultRouter()
router.register('', views.NoteViewSet)

app_name = 'note'

urlpatterns = [
    path('', include(router.urls)),
    path('like/<str:note_id>', views.ToggleLikes.as_view()),
]
