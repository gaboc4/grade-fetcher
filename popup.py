#!/usr/bin/python

import getpass
from robobrowser import RoboBrowser
import time

timer = 60

# Open the browser
browser = RoboBrowser(user_agent='Mozilla/5.0 (Windows NT 6.1; WOW64)',parser='lxml')

# Open Facebook login page
browser.open('https://neuidmsso.neu.edu/cas-server/login?service=https%3A%2F%2Fneuidmsso.neu.edu%2Fidp%2FAuthn%2FCas%2FNoForceAuthn')

# Grab the login form
form = browser.get_forms()[0]

print(browser.get_forms()[0])

# Get email and password from user
form['username'].value = str(raw_input("Username:"))
form['password'].value = str(getpass.getpass())

# form['username'].value = str("duffy.tr")
# form['password'].value = str("higabe")



# Submit login form
browser.submit_form(form)

# Open Facebook login page
#browser.open('https://blackboard.neu.edu/webapps/streamViewer/streamViewer?cmd=view&streamName=mygrades_d')

print(browser.parsed)
