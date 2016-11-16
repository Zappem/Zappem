var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var Project = require('../models/Project.js');

router.get('/', function(req, res){
	// Here the user can select an existing project or create a new one.

	// Why are we getting the user again? Because we want the latest info.
	// Req.user is from when they last logged in - it may have changed since then.

	var userProjects = User.findById(req.user._id, function(err, user){
		res.render('dashboard/index', {
			title:'Select a project',
		});	
	});

});

router.get('/new', function(req, res){
	res.render('projects/new', {
		title: 'Create a project'
	});
});

router.post('/new', function(req, res){
	var project = new Project({
		project_name: req.body.name,
		url: req.body.url,
	});
	project.members.push(req.user);
	project.save(function(err){
		if(err) console.log(err);
		res.redirect('/projects');	
	});
});

module.exports = router;

