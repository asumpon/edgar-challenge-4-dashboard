from django.shortcuts import render
from django.http import HttpResponse
import json, plotly
# from hello.wrangle_data import return_figures
from .models import Greeting
from plotly import express as px

# Create your views here.
def index(request):
    # figures = return_figures()
    # ids = ['figure-{}'.format(i) for i, _ in enumerate(figures)]
    # figuresJSON = json.dumps(figures, cls=plotly.utils.PlotlyJSONEncoder)
    # return HttpResponse('Hello from Python!')
    # return render(request, "index.html",ids=ids,figuresJSON=figuresJSON)
    
    # fig =px.scatter(x=range(10), y=range(10))
    # graph = fig.to_html(full_html=False, default_height=500, default_width=700)
    # context = {'graph': graph}  
  
    gapminder = px.data.gapminder()

    fig = px.scatter(
        gapminder.query("year==2007"),
        x="gdpPercap",
        y="lifeExp",
        size="pop",
        color="continent",
        hover_name="country",
        log_x=True,
        size_max=60,
        height=400,
        width=650,
    )
    with open('index.html', 'w') as f:
        f.write(fig.to_html(include_plotlyjs='cdn'))
    return render(request, "index.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
