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
			res.redirect('/home');
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

router.all('/', function(req, res){
	res.redirect('/projects');
});
router.use('/projects', require('./controllers/projects'));

router.use('/project/:id', function(req, res, next){
	var Project = require('./models/Project.js');
	Project.findById(req.params.id, function(err, project){
		res.locals.project = project;
		next();
	});
});

router.use('/project/:id/dashboard', require('./controllers/dashboard'));


router.use('/login', require('./controllers/login'));
router.use('/logout', require('./controllers/logout'));
router.use('/register', require('./controllers/register'));
router.use('/forgot-password', require('./controllers/forgot'));

router.all('/project/:id', function(req, res){
	res.redirect('/project/'+req.params.id+'/dashboard');
});

//router.use('/project/:id', require('./controllers/dashboard'));

module.exports = router;