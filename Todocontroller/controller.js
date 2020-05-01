
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
	console.log(req.body);	
	req.end();
});

app.delete('/', function (req, res) {

});


};