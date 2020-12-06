from django.shortcuts import render
from django.http import HttpResponse
import json, plotly
# from hello.wrangle_data import return_figures
from .models import Greeting

# Create your views here.
def index(request):
    # figures = return_figures()
    # ids = ['figure-{}'.format(i) for i, _ in enumerate(figures)]
    # figuresJSON = json.dumps(figures, cls=plotly.utils.PlotlyJSONEncoder)
    # return HttpResponse('Hello from Python!')
    # return render(request, "index.html",ids=ids,figuresJSON=figuresJSON)
    
    fig =px.scatter(x=range(10), y=range(10))
    graph = fig.to_html(full_html=False, default_height=500, default_width=700)
    print(graph)
    context = {'graph': graph}  
    return render(request, "index.html", context)


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
