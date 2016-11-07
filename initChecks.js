module.exports = function(mongoose, config, app){

	return {

		isDataProvided: function(){
			return config.db_host != "" && config.db_port != "";
		},

		connectToDB: function(next){

			mongoose.connect(config.db_host, config.db_database, config.db_port, function(err){
				if(!err && mongoose.connection.readyState == 1){
					app.isConnected = true;
				}else{
					app.isConnected = false;
				}
				next(app.isConnected);
			});

			mongoose.connection.on('error', function(err){
				mongoose.connection.close();
				app.isConnected = false;
				console.log('Connection to the DB was lost');
			});

			mongoose.connection.on('disconnected', function(){
				mongoose.connection.close();
				app.isConnected = false;
				console.log('Connection to the DB was lost');
			});

		}

	}

};