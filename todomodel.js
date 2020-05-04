const mongoose = require('mongoose');


//Create Schema and Model
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
	name: String,
	},{collection:'data'});

module.exports = mongoose.model('Todo',TodoSchema);