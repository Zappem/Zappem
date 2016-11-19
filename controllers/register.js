var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var passwordHash = require('password-hash-and-salt');

router.get('/', function(req, res){
	res.rendr('register/index', {
		title:'Register'
	});
});

router.post('/', function(req, res){

	// TODO: Validation
	passwordHash(req.body.password).hash(function(err, hash){
		var newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: hash,
		}).save(function(err){
			res.redirect('/login');
		});
	});


});


module.exports = router;
