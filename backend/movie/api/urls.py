from django.urls import path
from .views import Movieview,MovieDetailView
urlpatterns=[
    path("movies/",Movieview.as_view()),
    path("movies/<int:pk>/",MovieDetailView.as_view())

]