from rest_framework import serializers

from .models import Drinks, Dinner, Event


class DrinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drinks
        fields = ('id', 'home', 'alcoholic', 'name', 'price', 'time', 'location', 'ingredients', 'instructions')

class DinnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dinner
        fields = ('id', 'home', 'name', 'vegetarian', 'ingredients', 'instructions', 'location', 'price', 'time')

class EventSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Event
        fields = ('id', 'home', 'time', 'location')