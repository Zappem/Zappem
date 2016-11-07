module.exports = function(app){

	var middleware = {};
	middleware.auth = require('./middleware/auth.js')(app);
	middleware.config = require('./middleware/config.js')(app);

	app.use(function(req, res, next){
		if(middleware.config.isSet(req, res)){
			if(middleware.auth.isAuth(req, res)){
				next();
			}
		}
	});

};