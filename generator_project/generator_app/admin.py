from django.contrib import admin
from .models import Drinks, Dinner, Event

admin.site.register([Drinks, Dinner, Event])