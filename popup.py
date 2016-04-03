#!/usr/bin/python

import getpass
from robobrowser import RoboBrowser
import time

timer = 60

# Open the browser
browser = RoboBrowser(parser='lxml')

# Open Facebook login page
browser.open('https://neuidmsso.neu.edu/cas-server/login?service=https%3A%2F%2Fneuidmsso.neu.edu%2Fidp%2FAuthn%2FCas%2FNoForceAuthn')

# Grab the login form
form = browser.get_forms()[0]

# Get email and password from user
form['username'].value = str(input("Email: "))
form['password'].value = str(getpass.getpass())

# Submit login form
browser.submit_form(form)

# Poke loop
while True:
    browser.open('https://m.facebook.com/pokes')
    pokes = browser.get_links(text="Poke Back")
    print("%d people Poked you!" % len(pokes))

    if len(pokes) > 0:
        for p in pokes:
            print("Poked!")
            browser.follow_link(p)
        if timer > 2:
            timer = int(timer / 2)
    if timer < 61:
        timer = int(timer * 1.25)
    time.sleep(timer)
