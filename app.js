// Zappem
console.log('Loading dependencies...');

var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	config = require('./config.js'),
	initChecks = require('./initChecks.js')(mongoose, config, app);

app.mongoose = mongoose;
app.initChecks = initChecks;

console.log('Reading ./config.js file...');

if(initChecks.isDataProvided()){

	console.log('Connecting to DB...');
	initChecks.connectToDB(function(success){

		if(success){
			//app.models = require('./models.js')(mongoose);
			require('./routes.js')(app);
			app.listen(3000);
			console.log('Welcome to Zappem!');
			console.log('You\'re ready to go.');

		}else{
			console.log('Connection to the DB failed');
		}

	});

}else{
	
	app.use(function(req, res){
		res.send('Please fill in your db info and then restart the app');
	});

}