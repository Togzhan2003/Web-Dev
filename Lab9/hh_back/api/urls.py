from django.urls import path
from . import views 

urlpatterns = [
    path('companies',views.companies),
    path('companies/<int:pk>/',views.company),
    path('companies/<int:id>/vacancies/',views.get_company_vacancies),
    path('vacancies/',views.vacancies),
    path('vacancies/<int:id>',views.vacancy),
    path('vacancies/top_ten/',views.get_top_ten_vacancies)
]
