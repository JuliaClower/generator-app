from django.contrib import admin
from .models import Drinks, Dinner, Event, Date

admin.site.register([Drinks, Dinner, Event, Date])