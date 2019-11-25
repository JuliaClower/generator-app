from django.db import models

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