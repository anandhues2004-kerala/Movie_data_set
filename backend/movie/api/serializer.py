from rest_framework import serializers
from data.models import Movies

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Movies
        fields="__all__"
# class SignupSerializer(serializers.ModelSerializer):
#     email=serializers.EmailField(
#         requried=True,
#         validators=[uniqueValidator(queryset=User.objects.all(),message="Email already registered")]
#     )   
#     password=serializers.CharField(writeonly)   