from django.db.models import Q
from data.models import Movies
from .serializer import MovieSerializer
from rest_framework import generics


class Movieview(generics.ListCreateAPIView):

    serializer_class = MovieSerializer
    queryset = Movies.objects.all()

    def get_queryset(self):

        search = self.request.query_params.get('search')

        queryset = Movies.objects.all()

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(language__icontains=search) |
                Q(description__icontains=search)
            )

        return queryset


class MovieDetailView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Movies.objects.all()
    serializer_class = MovieSerializer
    lookup_field = "pk"