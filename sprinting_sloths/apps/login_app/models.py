from __future__ import unicode_literals
from django.db import models
from django.contrib import messages
from django.core.exceptions import ObjectDoesNotExist
import bcrypt
from random import randint
import re
from datetime import date, timedelta
import datetime
# create a poke
def pokeAction(pokie, poker):
    Poke.objects.create(poker=User.objects.get(id=poker), poked=User.objects.get(id=pokie))
    pokedUser = User.objects.get(id=pokie)
    pokedUser.pokes += 1
    pokedUser.save()
    return
# set session upon login
def sessionUpdate(request):
    request.session['name'] = User.objects.get(email=request.POST['email']).alias
    request.session['id'] = User.objects.get(email=request.POST['email']).id
    request.session['logged_in'] = True
# container for User methods
class formManager(models.Manager):
    # 18 years of age check
    def ageCalc(self, birthdate):
        today = date.today()
        birthday = datetime.datetime.strptime(birthdate, '%Y-%m-%d')
        if (today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))) < 18:
            return False
        return True
    # error checker
    def ErrorCheck(self, request, type):
        result = {"pass" : False, "errors" : None}
        if type == "Register":
            result['errors'] = User.objects.reg_validator(request.POST)
        if type == "Login":
            result['errors'] = User.objects.login_validator(request.POST)
        if len(result['errors']):
            for error in result['errors'].itervalues():
                messages.add_message(request, messages.ERROR, error)
        else:
            result['pass'] = True
        return result
    # encrypt password --> user creation --> login session
    def createUser(self, request):
        charliefoxtrot = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        User.objects.create(name=request.POST['name'], alias=request.POST['alias'], email= request.POST['email'], password=charliefoxtrot, dob=request.POST['dob'], pokes=0)
        sessionUpdate(request)
    # validate reg form data
    def reg_validator(self, postData):
        errors = {}
        if postData['password']!=postData['c_password']:
            errors["confirm"] = "Passwords do not match"
        if len(postData['name']) < 2:
            errors["name"] = "Name must be be more than 1 character"
        if len(postData['alias']) < 2:
            errors["alias"] = "Alias should be more than 1 character"
        if not re.match(r"[^@]+@[^@]+\.[^@]+$", postData['email']):
            errors["email"] = "Must use a valid Email"
        if not User.objects.ageCalc(postData['dob']):
            errors["dob"] = "Must be 18 years of age to register, poking is no joke"
        if len(postData['password']) < 8:
            errors["password"] = "password requires minimum 8 characters"
        if len(self.filter(email= postData['email'])) > 0:
            errors['email'] = "this user already exists"
        print "validation completed"
        return errors;
    # validate login form data
    def login_validator(self, postData):
        errors = {}
        if not re.match(r"[^@]+@[^@]+\.[^@]+$", postData['email']):
            errors["email"] = "Must use a valid Email"
        try:
            if User.objects.get(email=postData['email']):
                user = User.objects.get(email=postData['email']).password
                if not bcrypt.checkpw(postData['password'].encode(), user.encode()):
                    errors['password'] = "incorrect password"
        except ObjectDoesNotExist:
            errors['email'] = "Email not found, please Register"
            print "email isnt there"
        print "validation completed"
        return errors;
# User model
class User(models.Model):
    name = models.CharField(max_length=32)
    alias = models.CharField(max_length=32)
    email = models.CharField(max_length=64)
    dob = models.DateField()
    pokes = models.IntegerField()
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = formManager()
    def __str__(self):
        return "%s %s" % (self.name, self.alias)
# Poke model
class Poke(models.Model):
    poker = models.ForeignKey(User, related_name="pokers")
    poked = models.ForeignKey(User, related_name="poked_by")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __str__(self):
        return "%s poked %s" % (self.poker, self.poked)
