from django.db import models

class Movies(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    language = models.CharField(max_length=50)
    time = models.TimeField(default="02:30:00")
    year = models.IntegerField()
    collection = models.CharField(max_length=10)
    image = models.URLField()

    def __str__(self):
        return self.name