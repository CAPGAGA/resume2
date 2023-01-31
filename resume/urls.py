from django.contrib import admin
from django.urls import path
from . import views

APP_NAME = 'resume'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index")
]
