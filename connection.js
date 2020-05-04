var mongodb = require('mongodb');
var mongoClient = mongodb.mongoClient;

var url= 'mongodb://localhost:27017/Todo'

mongoClient.connect(url,function(err,db)){
	if(err){
		console.log(err);
	}
	else
	{
		console.log("We are connected");
		var collection = db.collection('list');s
		db.close();
	}
}