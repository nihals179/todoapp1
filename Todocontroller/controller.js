
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var data = [
{name:'nihal'}, {name:'hari'}
]

module.exports = function(app){

app.get('/', function (req, res) {

   res.render('todo',{todo:data});

}); 

app.post('/',urlencodedParser, function (req, res) {
	data.push(req.body);
	res.json(data);
});

app.delete('/:name', function (req, res) {
	data= data.filter(function(todo){
		return todo.name.replace(/ /g, '-')!==req.params.name;
	});
});

};
