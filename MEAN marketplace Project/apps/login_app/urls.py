from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
    url(r'^pokes$', views.pokes),
    url(r'^test$', views.test),
    url(r'^poke/(\d{1,})$', views.poke),
    url(r'^$', views.index),
]
