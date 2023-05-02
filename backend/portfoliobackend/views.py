from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    theIndex = open('static/index.html')
    return HttpResponse(theIndex)
