var express = require('express');
var todocontroller = require('./Todocontroller/controller');
var signup=require('./Todocontroller/signupcontroller');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app= express();


// var mongoose = require("mongoose");

// mongoose.connect('localhost:27017/Todo')

todocontroller(app);


app.set('view engine','ejs');

app.use(express.static('./public'));

app.listen(3000)

