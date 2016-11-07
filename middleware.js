module.exports = function(app){

	var middleware = {};
	middleware.auth = require('./middleware/auth.js')(app);

	app.use(function(req, res, next){
		if(middleware.auth.isAuth(req, res) && app.isConnected) {
			next();
		}else if(app.isConnected){
			// User is not logged in.
			// Is this a restricted route?

		}else{
			// User was disconnected. Try connecting again.
			console.log('Connection to the DB failed');
		}
	});

};