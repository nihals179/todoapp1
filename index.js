var express = require('express');
var todocontroller = require('./Todocontroller/controller');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app= express();

todocontroller(app);

app.set('view engine','ejs');

app.listen(3000)