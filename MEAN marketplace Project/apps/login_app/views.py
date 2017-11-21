# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import *
from django.db.models import Count
from django.shortcuts import render, redirect
import random
import time
import bcrypt
def index(request):
    # kick user out of login screen if they are already logged in
    if "logged_in" in request.session:
        return redirect("/pokes")
    return render(request, "login_app/index.html")
def register(request):
    # regist validation check
    results = User.objects.ErrorCheck(request, "Register")
    if results['pass']:
        User.objects.createUser(request)
        return redirect("/pokes")
    else:
        return redirect("/")
def login(request):
    # log in validation check
    results = User.objects.ErrorCheck(request, "Login")
    if results['pass']:
        sessionUpdate(request)
        return redirect("/pokes")
    else:
        return redirect("/")
def logout(request):
    # clear session data and redirect to the login page
    request.session.clear()
    return redirect('/')
def pokes(request):
    # check if user is logged in before accessing site functionality
    if "logged_in" not in request.session:
        return redirect("/")
    # create a content package of all users ordered by # pokes desc, number of times the user has been poked, and a parsed value of how many pokes the user has recieved from a given source ordered desc
    users = {"Users": User.objects.all().order_by('-pokes').exclude(id=request.session['id']), "times":Poke.objects.values('poker').filter(poked__id=request.session['id']).annotate(poke_times=Count('poker')).count(),"pokers": Poke.objects.values('poker').filter(poked__id=request.session['id']).annotate(poke_times=Count('poker')).order_by('-poke_times')}
    return render(request, "login_app/pokes.html", users)
def poke(request, user_id):
    pokeAction(user_id, request.session['id'])
    return redirect("/pokes")

# Functionality to quickly create 10 users with random names/emails all with default password "password"
def test(request):
    def randomWord(num):
        vowel = ("u", "a", "ae", "e", "eh", "ur", "i", "ee", "o", "ah", "ou", "oo", "ow", "ei", "oy", "ai", "er", "ure")
        consonant = ("b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ing", "p", "r", "s", "sh", "t", "ch", "th", "ge", "si", "z", "v", "w")
        word = ""
        for count in range(0, num/2):
            word += str(random.choice(vowel)) + str(random.choice(consonant))
            if len(word)>num:
                break
        return word[:num]
    def strTimeProp(start, end, formating, prop):
        stime = time.mktime(time.strptime(start, formating))
        etime = time.mktime(time.strptime(end, formating))
        ptime = stime + prop * (etime - stime)
        return time.strftime(formating, time.localtime(ptime))
    def randomDate(start, end, prop):
        return strTimeProp(start, end, '%Y-%m-%d', prop)

    for value in range(1,10):
        User.objects.create(name=str(randomWord(6)+" "+ str(randomWord(12))), alias=str(randomWord(12)), email= str(randomWord(6))+"@gmail.com", password=bcrypt.hashpw("password".encode(), bcrypt.gensalt()), dob=randomDate("1970-8-22", "1999-8-22", random.random()), pokes=0)
    return redirect("/")
