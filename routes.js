var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.use(function(req, res, next){
	if(mongoose.connection.readyState == 1){
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
router.use('/exceptions', mustBeUser, require('./controllers/exceptions'));
router.use('/users', mustBeUser, require('./controllers/users'));

module.exports = router;
