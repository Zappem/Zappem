var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.use(function(req, res, next){
	if(mongoose.connection.readyState == 1){
		res.locals.active = {};
		res.locals.active[req.path.substring(1)] = true;
		if(req.path == "/setup-db"){
			res.redirect('/');
			return;
		}
		next();
	}else{
		if(req.path != "/setup-db"){
			res.redirect('/setup-db');
			return;
		}
		next();
	}
});

router.get('/', function(req, res){
  if(req.user){
    res.redirect('/dashboard');
  }else{
    res.redirect('/login');
  }
});

router.all('/api/v1/:endpoint', function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	next();
});

var mustBeGuest = function (req, res, next) {
	if(!req.user) return next();
	return res.redirect('/dashboard');
};

var mustBeUser = function(req, res, next){
	if(req.user){
		res.locals.user = req.user;
		return next();
	}
	req.flash('error', ['Please log in first']);
  	return res.redirect('/login');
}

router.use('/login', mustBeGuest, require('./controllers/login'));
router.use('/logout', mustBeUser, require('./controllers/logout'));
router.use('/forgotten-password', mustBeGuest, require('./controllers/forgotten-password'));
router.use('/sign-up', mustBeGuest, require('./controllers/sign-up'));
router.use('/dashboard', mustBeUser, require('./controllers/dashboard'));
router.use('/projects', mustBeUser, require('./controllers/projects'));
router.use('/exceptions', mustBeUser, require('./controllers/exceptions'));
router.use('/pings', mustBeUser, require('./controllers/pings'));
router.use('/logs', mustBeUser, require('./controllers/logs'));
router.use('/settings', mustBeUser, require('./controllers/settings'));
router.use('/profile', mustBeUser, require('./controllers/profiles'));
router.use('/manage', mustBeUser, require('./controllers/manage'));
router.use('/users', mustBeUser, require('./controllers/users'));

// This is the beast
router.use('/api/v1/exception', require('./controllers/api/exception'));

module.exports = router;
