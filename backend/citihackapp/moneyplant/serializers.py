from rest_framework import serializers
from moneyplant.models import Company,Industry,ESGInitiatives

class ESGInitiativesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ESGInitiatives
        fields = ['description,upvotes,downvotes,created,resourceLink','company']

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['name','description','industry']

class IndustrySerializer(serializers.ModelSerializer):
    # companies = CompanySerializer(many=True)
    # companies = CompanySerializer(many=True, read_only=True)
    
    class Meta:
        model = Industry
        fields = ['name','esgScore']

    # def create(self,validated_data):
    #     companiesData = validated_data.pop('companies')
    #     industry = Industry.objects.create(**validated_data)
    #     for companyData in companiesData:
    #         Company.objects.create(industry=industry, **companyData)
    #     return industry



