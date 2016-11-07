module.exports = function(app){


	var guestOnlyRoutes = [
		'/login',
		'/register',
		'/forgot-password'
	];

	app.use(function(req, res, next){
		if(req.user && app.isConnected) {

			if(guestOnlyRoutes.indexOf(req.originalUrl) > -1){
				res.redirect('/');
			}else{
				next();
			}
			
		}else if(app.isConnected){
			// User is not logged in.
			// Is this a restricted route?
			if(guestOnlyRoutes.indexOf(req.originalUrl) > -1){
				next();
			}else{
				res.redirect('/login');
			}

		}else{
			// User was disconnected. Try connecting again.
			console.log('Connection to the DB failed');
		}
	});


	/************/


	app.get('/', function(req, res){
		res.send('Hello World!');
	});

	app.use('/login', require('./controllers/login'));
	app.use('/register', require('./controllers/register'));
	app.use('/forgot-password', require('./controllers/forgot'));

};
