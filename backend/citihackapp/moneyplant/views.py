from moneyplant.models import Company, Industry, ESGInitiatives
from moneyplant.serializers import CompanySerializer, IndustrySerializer, ESGInitiativesSerializer 
from django.http import Http404
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
# def IndustryList(APIView):
#     """
#     List all industries
#     """
#     def get(self, request, format=None):
#         industries = Industry.objects.all()
#         print(industries)
#         serializer = IndustrySerializer(industries, many=True)
#         return Response(serializer.data)

@api_view(['GET','POST'])
def industry_list(request):
    """
    List all industries and create industry
    """
    if request.method == 'GET':
        industries = Industry.objects.all().values()
        serializer = IndustrySerializer(industries,many=True)
        print(dict(serializer.data[0]))
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = IndustrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def industry_detail(request, name):
    """
    Retrieve, update or delete a code Industry.
    """
    try:
        industry = Industry.objects.get(name=name)
    except industry.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = IndustrySerializer(industry)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = IndustrySerializer(industry, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        industry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','POST'])
def company_list(request):
    """
    List all industries and create industry
    """
    name = request.data["industry"]
    try:
        industry = Industry.objects.get(name=name)
    except industry.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        companies = Company.objects.all()
        print(companies)
        serializer = CompanySerializer(companies,many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, bloomberg_code):
    """
    Retrieve, update or delete a code Industry.
    """
    try:
        company = Company.objects.get(bloomberg_code=bloomberg_code)
    except company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(Company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','POST'])
def company_esg_list(request):
    """
    List all industries and create industry
    """
    name = request.data["company"]
    try:
       company = Company.objects.get(name=name)
    except company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        eSGInitiatives = ESGInitiatives.objects.filter(company=request.data["company"])
        serializer = ESGInitiativesSerializer(eSGInitiatives,many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = ESGInitiativesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def company_esg_detail(request, pk):
    """
    Retrieve, update or delete a code Industry.
    """
    try:
        eSGInitiatives = ESGInitiatives.objects.get(pk=pk)
    except eSGInitiatives.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ESGInitiativesSerializer(eSGInitiatives)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ESGInitiativesSerializer(eSGInitiatives, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        eSGInitiatives.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)