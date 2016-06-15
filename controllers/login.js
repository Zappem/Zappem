var express 	= require('express');
var router 		= express.Router();
var passport 	= require('passport');
var Project		= require('../models/project');

router.get('/', function(req, res){

	if(req.xhr){
		res.send(JSON.stringify({"success":false, "msg": "Invalid username or password"}));
	}else{
		res.render('login', {
			hide_topbar: true
		});

	}
});

router.post('/', 
	passport.authenticate('local', {
		failureRedirect: '/login', 
		failureFlash: "Invalid username or password"
	}), function(req, res){

	if(req.xhr){

		var html = res.render('overview/inner', function(err, html){
			var topbar = res.render('layouts/topbar', {hidden: true}, function(err, topbar){
				res.send(JSON.stringify({"success":true,  "html":html, "topbar": topbar}));
			});
		});

	}

});

module.exports = router;