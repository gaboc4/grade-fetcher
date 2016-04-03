#!/bin/env python

import getpass
from robobrowser import RoboBrowser
import time

timer = 60

# Open the browser
browser = RoboBrowser(user_agent='Mozilla/5.0 (Windows NT 6.1; WOW64)'
                      'AppleWebKit/537.36 (KHTML, like Gecko)'
                      'Chrome/45.0.2454.93 Safari/537.36', parser='lxml')

# Open Facebook login page
browser.open('https://m.facebook.com/login')

# Grab the login form
form = browser.get_forms()[0]

# Get email and password from user
form['email'].value = str(input("Email: "))
form['pass'].value = str(getpass.getpass())

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
