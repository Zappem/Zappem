// Zappem
var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	config = require('./config.js'),
	initChecks = require('./initChecks.js')(mongoose, config, app);

app.config = config;

// First things first, are they connected to a db?
app.initCheck = {

	isDataProvided: function(){
		return config.db_host != "" && config.db_port != "" ? true : false;
	},

	connectToDB: function(next){

	}

};


if(initChecks.isDataProvided()){
	initChecks.connectToDB(function(){

		require('./middleware.js')(app);
		require('./routes.js')(app);
		app.listen(3000);
		
	});
}else{
	
	app.use(function(req, res){
		res.send('Please fill in your db info and then restart the app');
	});

}