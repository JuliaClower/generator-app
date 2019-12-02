from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import DrinksSerializer, DinnerSerializer, EventSerializer, DateSerializer
from .models import Drinks, Dinner, Event, Date


class DrinksView(viewsets.ModelViewSet):
    queryset = Drinks.objects.all()
    serializer_class = DrinksSerializer

class DinnerView(viewsets.ModelViewSet):
    queryset = Dinner.objects.all()
    serializer_class = DinnerSerializer

class EventView(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class CreateDateView(viewsets.ModelViewSet):
    queryset = Date.objects.all()
    serializer_class = DateSerializer

