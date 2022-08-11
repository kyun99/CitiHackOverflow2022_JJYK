from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from moneyplant import views

urlpatterns = [
    path('industry/', views.industry_list),
    path('industry/<slug:name>', views.industry_detail),
    path('company/', views.company_list),
    path('company/<slug:bloomberg_code>', views.company_detail),
    path('esg/', views.esg_list),
    path('esg/<int:pk>', views.esg_detail),
    path('companyESG/<slug:bloomberg_code>',views.company_esg_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)