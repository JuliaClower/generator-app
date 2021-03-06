from django.db import models

class Date(models.Model):
    name = models.CharField(max_length=255)
    drink = models.CharField(max_length=255)
    dinner = models.CharField(max_length=255)
    event = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Drinks(models.Model):
    home = models.BooleanField(default=True)
    alcoholic = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    time = models.IntegerField()
    location = models.CharField(max_length=255)
    ingredients = models.CharField(max_length=255)
    instructions = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Dinner(models.Model):
    home = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    vegetarian = models.BooleanField(default=True)
    ingredients = models.CharField(max_length=255)
    instructions = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    price = models.IntegerField()
    time = models.IntegerField()

    def __str__(self):
        return self.name

class Event(models.Model):
    home = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    time = models.IntegerField()
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.name

