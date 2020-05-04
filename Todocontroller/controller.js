
var bodyParser = require('body-parser');
var todomodel = require('../todomodel');
var mongoose = require("mongoose");
var express = require('express');
var signup = require('./signupcontroller');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
mongoose.Promise = global.Promise;
var data = [
{name:'nihal'}, {name:'hari'}
]

module.exports = function(app){

app.use('/signup',signup);

app
.route('/')
.get(function (req, res) {
	// Todo.find()
	// .then(function(doc){
	// 	res.render('todo',{todo:doc});
	// })
   res.render('todo',{todo:data});

})

.post(urlencodedParser, function (req, res) {

	// var data = {
	// 	name = req.body.name,
	// };

	// var data = var todo(data);
	// data.save();
	// res.json({todo:data});

	data.push(req.body);
	res.json({todo:data});
})


// app.post('/update',urlencodedParser, function (req, res) {
// 	var data= {
// 		name = req.body.name,
// 	}

// 	var id =req.body.id;

// 	UserData.findById(id. function(err,doc){
// 		if(err){
// 			console.error('error');
// 		}
// 		doc.name = req.body.name;
// 		doc.save();
// 	})


// 	var data = var todo(data);
// 	 data.save();

// 	// data.push(req.body);
// 	// res.json({todo:data});
// })
app
.route('/:name')
.delete(function (req, res) {
	data= data.filter(function(todo){
		return todo.name.replace(/ /g, '-') !== req.params.name;
	})
	res.json({todo:data});
})

};
