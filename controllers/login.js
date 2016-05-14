var express 	= require('express');
var router 		= express.Router();
var passport 	= require('passport');

router.get('/', function(req, res){
	res.render('login', {
		login_error: req.flash('error')[0],
		layout: 'layouts/login'
	});
});

router.post('/', 
	passport.authenticate('local', {
		failureRedirect: '/login', 
		failureFlash: "Invalid username or password"
	}), function(req, res){

	res.redirect('/dashboard');

});

module.exports = router;