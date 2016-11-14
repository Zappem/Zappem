// Zappem
console.log('Loading dependencies...');

var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	config = require('./config.js'),
	initChecks = require('./initChecks.js')(mongoose, config, app);


app.mongoose = mongoose;
app.initChecks = initChecks;

app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.set('view options', {layout: 'views/layout'});

console.log('Reading ./config.js file...');

if(initChecks.isDataProvided()){

	console.log('Connecting to DB...');
	initChecks.connectToDB(function(success){

		if(success){
			var routes = require('./routes.js');
			app.use(function(req, res, next){
				req.isConnected = app.isConnected;
				routes(req, res, next)
			});
			app.listen(process.env.PORT || 3000);
			console.log('Welcome to Zappem!');
			console.log('You\'re ready to go.');
			console.log('Head to http://localhost:'+(process.env.PORT || 3000));

		}else{
			console.log('Connection to the DB failed');
		}

	});

}else{
	
	app.use(function(req, res){
		res.send('Please fill in your db info and then restart the app');
	});

}