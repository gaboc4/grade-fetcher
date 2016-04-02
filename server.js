var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

  var username = 'duffy.tr';
  var password = '********';
  
  url = "https://neuidmsso.neu.edu/cas-server/login?service=https%3A%2F%2Fneuidmsso.neu.edu%2Fidp%2FAuthn%2FCas%2FNoForceAuthn";
  
  url.getElementByID('username').value = username;
  
  url.forms[0].submit()

})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;
