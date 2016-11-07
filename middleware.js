module.exports = function(app){

	var middleware = {};
	middleware.auth = require('./middleware/auth.js')(app);

	app.use(function(req, res, next){
		if(middleware.auth.isAuth(req, res) && app.isConnected) {
			next();
		}else if(app.isConnected){
			// User is not logged in.
		}else{
			// User was disconnected.
			res.send('You were disconnected from the db');
		}
	});

};