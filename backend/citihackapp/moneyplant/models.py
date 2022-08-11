from django.db import models

# Create your models here.
class Industry(models.Model):
    name = models.CharField(max_length=100,blank=False,default='')
    esgScore = models.DecimalField(max_digits=5,decimal_places=2,default=0)

    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name

class Company(models.Model):
    industry = models.CharField(max_length=100,blank=False,default='')
    name = models.CharField(max_length=100,blank=False,default='')
    description = models.TextField()
    target_price = models.DecimalField(max_digits=5,decimal_places=2,default=0)
    recommendation = models.CharField(max_length=100,blank=False,default='')
    market_cap = models.IntegerField(default=0)
    bloomberg_code = models.CharField(max_length=100,blank=False,default='')

    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name

class ESGInitiatives(models.Model):
    company = models.CharField(max_length=100,blank=False,default='')
    description = models.TextField()
    upvotes = models.PositiveIntegerField()
    downvotes = models.PositiveIntegerField()
    created = models.DateTimeField(auto_now=True)
    resourceLink = models.TextField()

    class Meta:
        ordering = ['created']
    
    def __str__(self):
        return self.description