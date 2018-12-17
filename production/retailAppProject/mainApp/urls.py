from django.urls import path
from .views import MainAppView

app_name = "MainApp"
urlpatterns = [
    path('', MainAppView.as_view(), name="Home")
]
