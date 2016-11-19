var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var Project = require('../models/Project.js');

router.get('/', function(req, res){
	// Here the user can select an existing project or create a new one.

	// Why are we getting the user again? Because we want the latest info.
	// Req.user is from when they last logged in - it may have changed since then.
	res.rendr('members/index', {
		title:'Project Team | '+res.locals.project.project_name,
	});	

});

router.get('/new', function(req, res){
	res.rendr('members/new', {
		title: 'New Team Member | '+res.locals.project.project_name
	});
});

router.post('/new', function(req, res){
	User.find({email: req.body.email}, function(err, member){
		res.locals.project.members.push(member);
		res.locals.project.save(function(err){
			if(err) console.log(err);
			res.redirect('/project/'+res.locals.project.id+'/members');	
		});
	});
});

module.exports = router;