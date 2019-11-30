from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('drinks', views.DrinksView)
router.register('dinner', views.DinnerView)
router.register('event', views.EventView)
router.register('date', views.CreateDateView)


urlpatterns = [
    path('', include(router.urls))
]