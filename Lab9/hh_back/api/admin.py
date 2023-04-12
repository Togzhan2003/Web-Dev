from django.contrib import admin
from api.models import Company,Vacancy
# Register your models here.
@admin.register(Company)
class CompanyCategory(admin.ModelAdmin):
    list_display = ('name','address')
admin.site.register(Vacancy)
