var express 	= require('express');
var router 		= express.Router();
var passport 	= require('passport');
var Project		= require('../models/project');

router.get('/', function(req, res){

	if(req.xhr){
		//res.send(JSON.stringify({"success":false}));

		//testing
		// var html = res.render('first-time', {layout: false}, function(err, html){
		// 	res.send(JSON.stringify({"success":true, "firstTime":true, "html":html}));	
		// });

		var html = res.render('project-select', {layout: false}, function(err, html){
			res.send(JSON.stringify({"success":true,  "projectSelect":html}));
		});

	}else{
		res.render('login', {
			login_error: req.flash('error')[0],
			layout: 'layouts/login'
		});
	}
});

router.post('/', 
	passport.authenticate('local', {
		failureRedirect: '/login', 
		failureFlash: "Invalid username or password"
	}), function(req, res){

	if(req.xhr){

		//Do they have any projects?
		//If not, it's their first time.

		var html = res.render('project-select', {layout: false}, function(err, html){
			res.send(JSON.stringify({"success":true,  "projectSelect":html}));
		});

	}else{
		res.redirect('/projects');

		//res.redirect('/dashboard');
	}

});

module.exports = router;