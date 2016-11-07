module.exports = function(app){

	return {

		isSet: function(req, res){
			// Has the user specified their connection details in /config.js?
			console.log(app);
			if(app.config.db_host != ""){
				return this.isConnected(req, res, next);
			}else{
				res.send('Please fill in the /config.js file');
			}
		},

		isConnected: function(req, res){
			// Are they connected to the database specified?
			if(true){
				return true;
			}
		}


	}

};