var express = require('express');
var router = express.Router();

var guestOnlyRoutes = [
	'/login',
	'/register',
	'/forgot-password'
];

router.use(function(req, res, next){

	if(req.user && req.isConnected) {

		if(guestOnlyRoutes.indexOf(req.originalUrl) > -1){
			res.redirect('/');
		}else{
			next();
		}
		
	}else if(req.isConnected){
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

// app.get('*', function(req, res) {
//        res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
//    });

// app.get('/', function(req, res){
// 	res.send('Hello World!');
// });

router.use('/login', require('./controllers/login'));
router.use('/register', require('./controllers/register'));
router.use('/forgot-password', require('./controllers/forgot'));

module.exports = router;