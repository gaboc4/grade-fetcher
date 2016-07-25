
# This example logs a user in to rubyforge and prints out the body of the
# page after logging the user in.
require 'rubygems'
require 'mechanize'
agent = Mechanize.new

page = agent.get('https://neuidmsso.neu.edu/cas-server/login?service=https%3A%2F%2Fneuidmsso.neu.edu%2Fidp%2FAuthn%2FCas%2FNoForceAuthn')

form = page.forms.first

form['username'] = 
form['password'] = 
page = form.submit

puts page.body
