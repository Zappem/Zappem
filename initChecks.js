module.exports = function(mongoose, config, app){

	return {

		isDataProvided: function(){
			return config.db_host != "" && config.db_port != "";
		},

		connectToDB: function(next){

			mongoose.connect(config.db_host, config.db_database, config.db_port, function(err){
				if(!err && mongoose.connection.readyState == 1){
					app.isConnected = true;
					next();
				}else{
					app.isConnected = false;
				}
			});

			mongoose.connection.on('error', function(err){
				app.isConnected = false;
				console.log('error');
			});

			mongoose.connection.on('disconnected', function(){
				app.isConnected = false;
				console.log('disconnected');
			});

		}

	}

};